import { IPeriodType } from '../../../../components/Form/PeriodValueInput/types';
import { getInterestRateMonthly } from '../../../../resources/utils/getInterestRateMonthly';
import { getPeriodMonthly } from '../../../../resources/utils/getPeriodMonthly';
import {
  IGetMonthlySimpleInterestRateParams,
  IResponseSimpleInterest,
} from './types';

export const useSimpleInterest = () => {
  const getValueSimpleInterest = (
    initialValue: number,
    timePeriodValue: number,
    interestPeriodValue: number,
  ): number => {
    const decimalInterestRate = timePeriodValue / 100;
    const justInterest =
      initialValue * decimalInterestRate * interestPeriodValue;

    return justInterest;
  };

  const getMonthlySimpleInterestRate = ({
    initialValue,
    interestPeriodValue,
    timePeriod,
    timePeriodValue,
    periodInterestRate,
  }: IGetMonthlySimpleInterestRateParams): IResponseSimpleInterest => {
    const monthlyInterest: number[] = [];
    const userInitialValue = Number(initialValue);
    const timePeriodMonthly = getPeriodMonthly(timePeriod, timePeriodValue);
    const interestRateMonthly = getInterestRateMonthly(
      periodInterestRate,
      interestPeriodValue,
    );

    for (let month = 0; month <= timePeriodMonthly; month++) {
      const interest = userInitialValue * (interestRateMonthly / 100) * month;
      monthlyInterest.push(Number(interest.toFixed(0)));
    }

    const justInterest = getValueSimpleInterest(
      initialValue,
      timePeriodValue,
      interestPeriodValue,
    );

    return {
      total: justInterest + Number(userInitialValue),
      justInterest,
      monthlyInterest,
      initialValue: userInitialValue,
    };
  };

  return {
    getMonthlySimpleInterestRate,
  };
};
