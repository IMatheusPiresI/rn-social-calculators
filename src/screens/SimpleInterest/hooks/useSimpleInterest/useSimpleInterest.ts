import { useState } from 'react';
import { IDataChart } from '../../../../components/ChartInterestEvolution/types';
import { IDataTable } from '../../../../components/TableInterestEvolution/types';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '../../../../resources/utils/formatPeriodNumberValue';
import { getInterestRateMonthly } from '../../../../resources/utils/getInterestRateMonthly';
import { getPeriodMonthly } from '../../../../resources/utils/getPeriodMonthly';
import {
  IFormSimpleInterestValues,
  useSimpleInterestForm,
} from '../useSimpleInterestForm';
import {
  IGetMonthlySimpleInterestRateParams,
  IResponseSimpleInterest,
} from './types';
import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';
import { LOG, logEvent } from '../../../../analytics/logs/logEvent';

export const useSimpleInterest = () => {
  const { control, errors, isValid, handleSubmit } = useSimpleInterestForm();

  const [showModalInterest, setShowModalInterest] = useState<boolean>(false);
  const [periodInterestRate, setPeriodInterestRate] = useState<PeriodType>(
    PeriodType.YEARLY,
  );
  const [periodTime, setPeriodTime] = useState<PeriodType>(PeriodType.YEARLY);
  const [dataForm, setDataForm] = useState<IDataChart[]>([]);
  const [dataTable, setDataTable] = useState<IDataTable[]>([]);

  const openModalInterest = () => {
    setShowModalInterest(true);
  };

  const handleCloseModalInterest = () => {
    setShowModalInterest(false);
  };

  const getValueSimpleInterest = (
    initialValue: number,
    timePeriodValue: number,
    interestPeriodValue: number,
  ): number => {
    const decimalInterestRate = timePeriodValue / 100;
    const justInterest =
      initialValue * decimalInterestRate * interestPeriodValue;

    return justInterest;
  };

  const getMonthlySimpleInterestRate = ({
    initialValue,
    interestPeriodValue,
    timePeriod,
    timePeriodValue,
    periodInterestRate,
  }: IGetMonthlySimpleInterestRateParams): IResponseSimpleInterest => {
    const monthlyInterest: number[] = [];
    const userInitialValue = Number(initialValue);
    const timePeriodMonthly = getPeriodMonthly(timePeriod, timePeriodValue);
    const interestRateMonthly = getInterestRateMonthly(
      periodInterestRate,
      interestPeriodValue,
    );

    for (let month = 0; month <= timePeriodMonthly; month++) {
      const interest = userInitialValue * (interestRateMonthly / 100) * month;
      monthlyInterest.push(Number(interest.toFixed(0)));
    }

    const justInterest = getValueSimpleInterest(
      initialValue,
      timePeriodValue,
      interestPeriodValue,
    );

    return {
      total: justInterest + Number(userInitialValue),
      justInterest,
      monthlyInterest,
      initialValue: userInitialValue,
    };
  };

  const submitSimpleInsterestForm = (values: IFormSimpleInterestValues) => {
    const result = getMonthlySimpleInterestRate({
      initialValue: formatOnlyNumbersCurrency(values.initialValue),
      interestPeriodValue: formatPeriodNumberValue(
        values.interestRatePeriodValue,
      ),
      timePeriodValue: formatPeriodNumberValue(values.timePeriodValue),
      periodInterestRate: periodInterestRate,
      timePeriod: periodTime,
    });

    const dataChart: IDataChart[] = result.monthlyInterest.map(
      (monthlyValue, monthIndex) => ({
        monthlyInterest: result.initialValue + monthlyValue,
        months: monthIndex + 1,
        initialValue: result.initialValue,
      }),
    );

    const dataTable: IDataTable[] = result.monthlyInterest.map(
      (monthlyValue, monthIndex) => ({
        months: monthIndex,
        monthlyInterest: monthlyValue,
        total: result.initialValue + monthlyValue,
        totalInterest: monthlyValue,
        totalInvested: result.initialValue,
      }),
    );

    logEvent(LOG.SIMPLE_INTEREST_CALC);
    setDataForm(dataChart);
    setDataTable(dataTable);
    openModalInterest();
  };

  return {
    control,
    errors,
    periodInterestRate,
    setPeriodInterestRate,
    periodTime,
    setPeriodTime,
    handleSubmit,
    submitSimpleInsterestForm,
    showModalInterest,
    isValid,
    dataForm,
    dataTable,
    handleCloseModalInterest,
  };
};
