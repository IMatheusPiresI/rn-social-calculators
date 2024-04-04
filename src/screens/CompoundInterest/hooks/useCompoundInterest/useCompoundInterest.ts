import { getInterestRateMonthly } from '../../../../resources/utils/getInterestRateMonthly';
import { getPeriodMonthly } from '../../../../resources/utils/getPeriodMonthly';
import { IGetCompoundInterest } from './types';

export const useCompoundInterest = () => {
  const getCompoundInterest = ({
    initialValue,
    monthlyValue,
    timePeriod,
    timePeriodValue,
    interestPeriodRate,
    interestPeriodValue,
  }: IGetCompoundInterest) => {
    const timePeriodMonthly = getPeriodMonthly(timePeriod, timePeriodValue);
    const interestRateMonthly = getInterestRateMonthly(
      interestPeriodRate,
      interestPeriodValue,
    );

    const monthsInterest = [];

    let valueAcc = initialValue;
    let oldInterest = 0;
    let total = 0;
    for (let month = 0; month <= timePeriodMonthly; month++) {
      let monthValyes = month === 0 ? 0 : monthlyValue;
      valueAcc += monthValyes + oldInterest;
      const interestMonth =
        valueAcc * (1 + interestRateMonthly / 100) - valueAcc;

      const monthInterest = {
        index: month,
        monthValue: valueAcc,
        monthInterest: oldInterest,
        totalInterest:
          valueAcc - initialValue - (month === 0 ? 0 : monthlyValue * month),
      };
      oldInterest = interestMonth;

      monthsInterest.push(monthInterest);
      if (month === timePeriodMonthly) {
        total = valueAcc;
      }
    }

    return {
      total,
      initialValue,
      monthlyValue,
      monthsInterest: [...monthsInterest],
    };
  };

  return {
    getCompoundInterest,
  };
};
