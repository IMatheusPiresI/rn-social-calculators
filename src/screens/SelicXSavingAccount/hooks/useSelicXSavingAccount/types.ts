import { IDataChart } from '../../../../components/ChartInterestEvolution/types';
import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';
import { IDataTable } from '../../../../components/TableInterestEvolution/types';

export type ISavingXSelicData = {
  savingValue: number;
  selicValue: number;
  period: PeriodType;
  periodTime: number;
  selic: {
    dataChart: IDataChart[];
    dataTable: IDataTable[];
  };
  saving: {
    dataChart: IDataChart[];
    dataTable: IDataTable[];
  };
};
