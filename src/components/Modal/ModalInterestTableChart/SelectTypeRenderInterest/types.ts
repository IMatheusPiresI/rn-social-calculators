import { IDataChart } from '../../../ChartInterestEvolution/types';
import { IDataTable } from '../../../TableInterestEvolution/types';

export enum ITypeRenderInterest {
  GRAPHIC = 'Graphic',
  TABLE = 'Table',
}

export type ISelectTypeRenderInterestProps = {
  dataChart: IDataChart[];
  dataTable: IDataTable[];
};
