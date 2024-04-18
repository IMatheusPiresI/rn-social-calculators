import { PeriodType } from '@components/Form/PeriodValueInput/constants';

export const getInterestRateMonthly = (
  periodInterestRate: PeriodType,
  interestRate: number,
) => {
  if (periodInterestRate === PeriodType.YEARLY) {
    return interestRate / 12;
  }

  return interestRate;
};
