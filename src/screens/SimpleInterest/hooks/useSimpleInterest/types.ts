import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';

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
  periodInterestRate: PeriodType;
  timePeriod: PeriodType;
}
