import React, { useState } from 'react';
import { Frame } from '../../components/UI/Frame';
import { Box } from '../../components/UI/Box';
import { MaskTextInputForm } from '../../components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';
import { PeriodValueInput } from '../../components/Form/PeriodValueInput';
import { IPeriodType } from '../../components/Form/PeriodValueInput/types';
import { IDataChart } from '../../components/ChartInterestEvolution/types';
import { Button } from '../../components/UI/Button';
import { Typograph } from '../../components/UI/Typograph';
import { IDataTable } from '../../components/TableInterestEvolution/types';
import { ModalInterestTableChart } from '../../components/Modal/ModalInterestTableChart';
import { useCompoundInterestForm } from './hooks/useCompoundInterestForm';
import { useCompoundInterest } from './hooks/useCompoundInterest';
import { IFormCompoundInterestValues } from './hooks/useCompoundInterestForm/types';
import { formatOnlyNumbersCurrency } from '../../resources/utils/formatOnlyNumbersCurrency';
import { formatPeriodNumberValue } from '../../resources/utils/formatPeriodNumberValue';

const CompoundInterest = () => {
  const { control, handleSubmit, errors } = useCompoundInterestForm();

  const { getCompoundInterest } = useCompoundInterest();

  const [showModalInterest, setShowModalInterest] = useState<boolean>(false);
  const [periodInterestRate, setPeriodInterestRate] = useState<IPeriodType>(
    IPeriodType.YEARLY,
  );
  const [periodTime, setPeriodTime] = useState<IPeriodType>(IPeriodType.YEARLY);
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

  return (
    <Frame title="Juros Compostos" canGoBack scrollable>
      <Box marginBottom={24}>
        <Typograph color="primary" font="INTER_MEDIUM" fontSize={16}>
          Realize o cálculo para habilitar o gráfico e tabela de rendimentos.
        </Typograph>
      </Box>
      <Box flex={1}>
        <Box>
          <MaskTextInputForm
            control={control}
            name="initialValue"
            error={errors.initialValue}
            label="Valor inicial"
            placeholder="R$ 0,00"
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
            maxLength={18}
          />
        </Box>
        <Box>
          <MaskTextInputForm
            control={control}
            name="monthlyValue"
            error={errors.initialValue}
            label="Valor Mensal"
            placeholder="R$ 0,00"
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
            maxLength={18}
          />
        </Box>
        <Box marginVertical={12}>
          <PeriodValueInput
            control={control}
            name="interestRatePeriodValue"
            error={errors.interestRatePeriodValue}
            label="Taxa de juros"
            placeholder="0"
            keyboardType="numeric"
            typeSelected={periodInterestRate}
            onSelectPeriod={setPeriodInterestRate}
            monthlyLabel="Mensal"
            yearlyLabel="Anual"
            maxLength={5}
          />
        </Box>
        <Box>
          <PeriodValueInput
            control={control}
            name="timePeriodValue"
            error={errors.timePeriodValue}
            label="Período"
            placeholder="0"
            keyboardType="numeric"
            typeSelected={periodTime}
            onSelectPeriod={setPeriodTime}
            monthlyLabel="Mes(es)"
            yearlyLabel="Ano(s)"
            maxLength={5}
          />
        </Box>
      </Box>
      <Box marginVertical={24}>
        <Button
          onPress={handleSubmit(submitCompoundInsterestForm)}
          title="Calcular"
        />
      </Box>

      <ModalInterestTableChart
        isVisible={showModalInterest}
        dataChart={dataChart}
        dataTable={dataTable}
        onClose={handleCloseModalInterest}
      />
    </Frame>
  );
};

export default CompoundInterest;
