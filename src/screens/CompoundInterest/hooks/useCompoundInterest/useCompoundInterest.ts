import { useState } from 'react';
import { IDataChart } from '../../../../components/ChartInterestEvolution/types';
import { IDataTable } from '../../../../components/TableInterestEvolution/types';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '../../../../resources/utils/formatPeriodNumberValue';
import {
  IFormCompoundInterestValues,
  useCompoundInterestForm,
} from '../useCompoundInterestForm';
import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';
import { getCompoundInterest } from '../../../../resources/utils/getCompoundInsterest';

export const useCompoundInterest = () => {
  const { control, handleSubmit, errors, isValid } = useCompoundInterestForm();

  const [showModalInterest, setShowModalInterest] = useState<boolean>(false);
  const [periodInterestRate, setPeriodInterestRate] = useState<PeriodType>(
    PeriodType.YEARLY,
  );
  const [periodTime, setPeriodTime] = useState<PeriodType>(PeriodType.YEARLY);
  const [dataChart, setDataChart] = useState<IDataChart[]>([]);
  const [dataTable, setDataTable] = useState<IDataTable[]>([]);

  const openModalInterest = () => {
    setShowModalInterest(true);
  };

  const handleCloseModalInterest = () => {
    setShowModalInterest(false);
  };

  const submitCompoundInsterestForm = (values: IFormCompoundInterestValues) => {
    const result = getCompoundInterest({
      initialValue: formatOnlyNumbersCurrency(values.initialValue),
      interestPeriodRate: periodInterestRate,
      interestPeriodValue: formatPeriodNumberValue(
        values.interestRatePeriodValue,
      ),

      monthlyValue: formatOnlyNumbersCurrency(values.monthlyValue),
      timePeriod: periodTime,
      timePeriodValue: formatOnlyNumbersCurrency(values.timePeriodValue),
    });

    const dataChart: IDataChart[] = result.monthsInterest.map((data) => ({
      initialValue: result.initialValue,
      monthlyInterest: data.monthValue,
      months: data.index,
    }));

    const dataTable: IDataTable[] = result.monthsInterest.map((data) => ({
      months: data.index,
      monthlyInterest: data.monthInterest,
      totalInterest: data.totalInterest,
      totalInvested: result.initialValue + result.monthlyValue * data.index,
      total: data.monthValue,
    }));

    setDataChart(dataChart);
    setDataTable(dataTable);
    openModalInterest();
  };

  return {
    control,
    errors,
    handleSubmit,
    submitCompoundInsterestForm,
    periodInterestRate,
    setPeriodInterestRate,
    periodTime,
    setPeriodTime,
    showModalInterest,
    isValid,
    dataChart,
    dataTable,
    handleCloseModalInterest,
  };
};
