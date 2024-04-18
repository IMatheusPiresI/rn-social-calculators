import { PeriodType } from '@components/Form/PeriodValueInput/constants';

export const getPeriodMonthly = (timePeriod: PeriodType, period: number) => {
  if (timePeriod === PeriodType.YEARLY) {
    return period * 12;
  }
  return period;
};
