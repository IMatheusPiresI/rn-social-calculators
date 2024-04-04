import { IPeriodType } from '../../../../components/Form/PeriodValueInput/types';

export type IGetCompoundInterest = {
  initialValue: number;
  monthlyValue: number;
  timePeriodValue: number;
  timePeriod: IPeriodType;
  interestPeriodValue: number;
  interestPeriodRate: IPeriodType;
};
