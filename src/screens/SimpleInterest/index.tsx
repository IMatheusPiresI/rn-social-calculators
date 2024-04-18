import React from 'react';
import { useSimpleInterest } from './hooks/useSimpleInterest';
import { Frame } from '../../components/UI/Frame';
import { Box } from '../../components/UI/Box';
import { MaskTextInputForm } from '../../components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';
import { PeriodValueInput } from '../../components/Form/PeriodValueInput';
import { Button } from '../../components/UI/Button';
import { Typograph } from '../../components/UI/Typograph';
import { ModalInterestTableChart } from '../../components/Modal/ModalInterestTableChart';
import { useScreenView } from '../../analytics';

const SimpleInterest = () => {
  useScreenView('SimpleInterest');
  const {
    control,
    dataForm,
    dataTable,
    errors,
    handleCloseModalInterest,
    handleSubmit,
    periodInterestRate,
    periodTime,
    isValid,
    setPeriodInterestRate,
    setPeriodTime,
    showModalInterest,
    submitSimpleInsterestForm,
  } = useSimpleInterest();

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
          disabled={!isValid}
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
