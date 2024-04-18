import React from 'react';
import { Frame } from '@components/UI/Frame';
import { Box } from '@components/UI/Box';
import { MaskTextInputForm } from '@components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';
import { Button } from '@components/UI/Button';
import { Typograph } from '@components/UI/Typograph';
import { BoxSelectPercentage } from '@components/BoxSelectPercentage/ index';
import { ButtonSelectProfission } from '@components/ButtonSelectProfission';
import { ModalEmergencyReserve } from '@components/Modal/ModalEmergencyReserve';
import { useScreenView } from '@analytics/index';

import { useEmergencyReserve } from './hooks/useEmergencyReserve';

const EmergencyReserve = () => {
  useScreenView('EmergencyReserve');
  const {
    control,
    errors,
    handleSubmit,
    percentageSize,
    setPercentageSize,
    profissionSelected,
    setProfissionSelected,
    submitSimpleInsterestForm,
    disabledButton,
    closeModalEmergencyReserve,
    emergencyReserveData,
    showModalEmergencyReserve,
  } = useEmergencyReserve();

  return (
    <Frame title="Reserva de Emergência" canGoBack scrollable>
      <Box marginBottom={24}>
        <Typograph color="primary" font="INTER_MEDIUM" fontSize={16}>
          Realize o cálculo para habilitar o gráfico e tabela de rendimentos.
        </Typograph>
      </Box>
      <Box flex={1}>
        <Box marginBottom={20}>
          <ButtonSelectProfission
            label="Profissão"
            profissionSelected={profissionSelected}
            setProfissionSelected={setProfissionSelected}
          />
        </Box>
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
          disabled={disabledButton}
        />
      </Box>
      <ModalEmergencyReserve
        isVisible={showModalEmergencyReserve}
        onClose={closeModalEmergencyReserve}
        emergencyReserveData={emergencyReserveData}
      />
    </Frame>
  );
};

export default EmergencyReserve;
