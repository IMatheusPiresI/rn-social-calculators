export type ITableInterestEvolutionProps = {
  dataTable: IDataTable[];
};
export type IDataTable = {
  months: number;
  monthlyInterest: number;
  totalInvested: number;
  totalInterest: number;
  total: number;
};
