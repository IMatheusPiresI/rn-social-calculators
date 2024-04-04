import React, { useState } from 'react';
import { Frame } from '../../components/UI/Frame';
import { Box } from '../../components/UI/Box';
import { MaskTextInputForm } from '../../components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';

import { Button } from '../../components/UI/Button';
import { Typograph } from '../../components/UI/Typograph';
import { BoxSelectPercentage } from '../../components/BoxSelectPercentage/ index';
import { useEmergencyReserve } from './hooks/useEmergencyReserve';
import { formatOnlyNumbersCurrency } from '../../resources/utils/formatOnlyNumbersCurrency';
import {
  IFormEmergencyReserveValues,
  useEmergencyReserveForm,
} from './hooks/useEmergencyReserveForm';

const EmergencyReserve = () => {
  const { control, errors, handleSubmit } = useEmergencyReserveForm();
  const { percentageSize, setPercentageSize } = useEmergencyReserve();

  const openModalInterest = () => {};

  const handleCloseModalInterest = () => {};

  const submitSimpleInsterestForm = (values: IFormEmergencyReserveValues) => {
    const fixedCost = formatOnlyNumbersCurrency(values.fixedCost);
    const monthlySalary = formatOnlyNumbersCurrency(values.monthlySalary);
    console.log(fixedCost);
    console.log(monthlySalary);
  };

  return (
    <Frame title="Reserva de Emergência" canGoBack scrollable>
      <Box marginBottom={24}>
        <Typograph color="primary" font="INTER_MEDIUM" fontSize={16}>
          Realize o cálculo para habilitar o gráfico e tabela de rendimentos.
        </Typograph>
      </Box>
      <Box flex={1}>
        <Box>
          <MaskTextInputForm
            control={control}
            name="fixedCost"
            error={errors.fixedCost}
            label="Custo fixo"
            placeholder="R$ 0,00"
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
          />
        </Box>
        <Box marginVertical={12}>
          <MaskTextInputForm
            control={control}
            name="monthlySalary"
            error={errors.monthlySalary}
            label="Salário Mensal"
            placeholder="R$ 0,00"
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
          />
        </Box>

        <BoxSelectPercentage
          label="Quanto você guarda por mês"
          percentageSize={percentageSize}
          setPercentageSize={setPercentageSize}
        />
      </Box>
      <Box marginVertical={24}>
        <Button
          onPress={handleSubmit(submitSimpleInsterestForm)}
          title="Calcular"
        />
      </Box>
    </Frame>
  );
};

export default EmergencyReserve;
