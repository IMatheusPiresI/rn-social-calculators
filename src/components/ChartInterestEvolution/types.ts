export type IChartInterestEvolutionProps = {
  dataChart: IDataChart[];
};

export type IDataChart = {
  months: number;
  monthlyInterest: number;
  initialValue: number;
};
