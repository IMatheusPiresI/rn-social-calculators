import { IPeriodType } from '../../../../components/Form/PeriodValueInput/types';

export interface IResponseSimpleInterest {
  total: number;
  justInterest: number;
  monthlyInterest: number[];
  initialValue: number;
}

export interface IGetMonthlySimpleInterestRateParams {
  initialValue: number;
  timePeriodValue: number;
  interestPeriodValue: number;
  periodInterestRate: IPeriodType;
  timePeriod: IPeriodType;
}
