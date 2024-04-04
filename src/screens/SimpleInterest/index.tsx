import React, { useState } from 'react';
import { useSimpleInterest } from './hooks/useSimpleInterest';
import { useSimpleInterestForm } from './hooks/useSimpleInterestForm';
import { IFormSimpleInterestValues } from './hooks/useSimpleInterestForm/types';
import { Frame } from '../../components/UI/Frame';
import { Box } from '../../components/UI/Box';
import { MaskTextInputForm } from '../../components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';
import { PeriodValueInput } from '../../components/Form/PeriodValueInput';
import { formatOnlyNumbersCurrency } from '../../resources/utils/formatOnlyNumbersCurrency';
import { IDataChart } from '../../components/ChartInterestEvolution/types';
import { Button } from '../../components/UI/Button';
import { Typograph } from '../../components/UI/Typograph';
import { IDataTable } from '../../components/TableInterestEvolution/types';
import { ModalInterestTableChart } from '../../components/Modal/ModalInterestTableChart';
import { formatPeriodNumberValue } from '../../resources/utils/formatPeriodNumberValue';
import { PeriodType } from '../../components/Form/PeriodValueInput/constants';

const SimpleInterest = () => {
  const { control, errors, handleSubmit } = useSimpleInterestForm();
  const { getMonthlySimpleInterestRate } = useSimpleInterest();

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

    setDataForm(dataChart);
    setDataTable(dataTable);
    openModalInterest();
  };

  return (
    <Frame title="Juros Simples" canGoBack scrollable>
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
          />
        </Box>
      </Box>
      <Box marginVertical={24}>
        <Button
          onPress={handleSubmit(submitSimpleInsterestForm)}
          title="Calcular"
        />
      </Box>

      <ModalInterestTableChart
        isVisible={showModalInterest}
        dataChart={dataForm}
        dataTable={dataTable}
        onClose={handleCloseModalInterest}
      />
    </Frame>
  );
};

export default SimpleInterest;
