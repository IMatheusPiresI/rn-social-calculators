import { IDataChart } from '../../ChartInterestEvolution/types';
import { IDataTable } from '../../TableInterestEvolution/types';

export type IModalInterestTableChartProps = {
  dataChart: IDataChart[];
  dataTable: IDataTable[];
  isVisible: boolean;
  onClose: () => void;
};
