import { useState } from 'react';
import { useSelicXSavingAccountForm } from '../useSelicXSavingAccountForm';
import { PeriodType } from '../../../../components/Form/PeriodValueInput/constants';
import { IFormSelicXSavingAccount } from '../useSelicXSavingAccountForm/types';
import { formatOnlyNumbersCurrency } from '../../../../resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '../../../../resources/utils/formatPeriodNumberValue';
import { getCompoundInterest } from '../../../../resources/utils/getCompoundInsterest';
import { ISavingXSelicData } from './types';
import { IDataTable } from '../../../../components/TableInterestEvolution/types';
import { IDataChart } from '../../../../components/ChartInterestEvolution/types';

export const useSelicXSavingAccount = () => {
  const [period, setPeriod] = useState<PeriodType>(PeriodType.YEARLY);
  const [dataSavingXSelic, setDataSavingXSelic] =
    useState<ISavingXSelicData | null>(null);
  const [showModalSavingXSelic, setShowModalSavingXSelic] =
    useState<boolean>(false);
  const { control, handleSubmit, errors, isValid } =
    useSelicXSavingAccountForm();
  const SELIC_PERCENTAGE_VALUE: number = 12.75;
  const SAVING_ACCOUNT_PERCENTAGE_VALUE: number = 6.167;

  const openModalSavingXSelic = () => {
    setShowModalSavingXSelic(true);
  };

  const closeModalSavingXSelic = () => {
    setShowModalSavingXSelic(false);
  };

  const handleSubmitFormSelic = (values: IFormSelicXSavingAccount) => {
    const initialValue = formatOnlyNumbersCurrency(values.initialValue);
    const monthValue = formatOnlyNumbersCurrency(values.monthValue);
    const periodValue = formatPeriodNumberValue(values.period);

    const savingValue = getCompoundInterest({
      initialValue,
      monthlyValue: monthValue,
      timePeriod: period,
      timePeriodValue: periodValue,
      interestPeriodRate: PeriodType.YEARLY,
      interestPeriodValue: SAVING_ACCOUNT_PERCENTAGE_VALUE,
    });

    const selicValue = getCompoundInterest({
      initialValue,
      monthlyValue: monthValue,
      timePeriod: period,
      timePeriodValue: periodValue,
      interestPeriodRate: PeriodType.YEARLY,
      interestPeriodValue: SELIC_PERCENTAGE_VALUE,
    });

    const selicDataChart: IDataChart[] = selicValue.monthsInterest.map(
      (data) => ({
        initialValue: selicValue.initialValue,
        monthlyInterest: data.monthValue,
        months: data.index,
      }),
    );

    const selicDataTable: IDataTable[] = selicValue.monthsInterest.map(
      (data) => ({
        months: data.index,
        monthlyInterest: data.monthInterest,
        totalInterest: data.totalInterest,
        totalInvested:
          selicValue.initialValue + selicValue.monthlyValue * data.index,
        total: data.monthValue,
      }),
    );

    const savingDataChart: IDataChart[] = savingValue.monthsInterest.map(
      (data) => ({
        initialValue: savingValue.initialValue,
        monthlyInterest: data.monthValue,
        months: data.index,
      }),
    );

    const savingDataTable: IDataTable[] = savingValue.monthsInterest.map(
      (data) => ({
        months: data.index,
        monthlyInterest: data.monthInterest,
        totalInterest: data.totalInterest,
        totalInvested:
          savingValue.initialValue + savingValue.monthlyValue * data.index,
        total: data.monthValue,
      }),
    );

    const data: ISavingXSelicData = {
      savingValue: savingValue.total,
      selicValue: selicValue.total,
      period: period,
      periodTime: periodValue,
      selic: {
        dataChart: selicDataChart,
        dataTable: selicDataTable,
      },
      saving: {
        dataChart: savingDataChart,
        dataTable: savingDataTable,
      },
    };

    setDataSavingXSelic(data);
    openModalSavingXSelic();
  };

  return {
    handleSubmit,
    handleSubmitFormSelic,
    setPeriod,
    closeModalSavingXSelic,
    control,
    period,
    errors,
    isValid,
    dataSavingXSelic,
    showModalSavingXSelic,
  };
};