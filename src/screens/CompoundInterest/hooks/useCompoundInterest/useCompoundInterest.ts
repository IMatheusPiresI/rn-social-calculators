import { useState } from 'react';
import { IDataChart } from '../../../../components/ChartInterestEvolution/types';
import { IDataTable } from '../../../../components/TableInterestEvolution/types';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '../../../../resources/utils/formatPeriodNumberValue';
import { getInterestRateMonthly } from '../../../../resources/utils/getInterestRateMonthly';
import { getPeriodMonthly } from '../../../../resources/utils/getPeriodMonthly';
import {
  IFormCompoundInterestValues,
  useCompoundInterestForm,
} from '../useCompoundInterestForm';
import { IGetCompoundInterest } from './types';
import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';

export const useCompoundInterest = () => {
  const { control, handleSubmit, errors } = useCompoundInterestForm();

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

  const getCompoundInterest = ({
    initialValue,
    monthlyValue,
    timePeriod,
    timePeriodValue,
    interestPeriodRate,
    interestPeriodValue,
  }: IGetCompoundInterest) => {
    const timePeriodMonthly = getPeriodMonthly(timePeriod, timePeriodValue);
    const interestRateMonthly = getInterestRateMonthly(
      interestPeriodRate,
      interestPeriodValue,
    );

    const monthsInterest = [];

    let valueAcc = initialValue;
    let oldInterest = 0;
    let total = 0;
    for (let month = 0; month <= timePeriodMonthly; month++) {
      let monthValyes = month === 0 ? 0 : monthlyValue;
      valueAcc += monthValyes + oldInterest;
      const interestMonth =
        valueAcc * (1 + interestRateMonthly / 100) - valueAcc;

      const monthInterest = {
        index: month,
        monthValue: valueAcc,
        monthInterest: oldInterest,
        totalInterest:
          valueAcc - initialValue - (month === 0 ? 0 : monthlyValue * month),
      };
      oldInterest = interestMonth;

      monthsInterest.push(monthInterest);
      if (month === timePeriodMonthly) {
        total = valueAcc;
      }
    }

    return {
      total,
      initialValue,
      monthlyValue,
      monthsInterest: [...monthsInterest],
    };
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
    dataChart,
    dataTable,
    handleCloseModalInterest,
  };
};
