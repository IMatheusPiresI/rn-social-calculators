import React from 'react';
import { Frame } from '../../components/UI/Frame';
import { Box } from '../../components/UI/Box';
import { MaskTextInputForm } from '../../components/Form/MaskTextInputForm';
import { Masks } from 'react-native-mask-input';
import { Button } from '../../components/UI/Button';
import { Typograph } from '../../components/UI/Typograph';
import { useSelicXSavingAccount } from './hooks/useSelicXSavingAccount';
import { PeriodValueInput } from '../../components/Form/PeriodValueInput';
import { ModalSavingXSelic } from '../../components/Modal/ModalSavingXSelic';
import { useScreenView } from '../../analytics/logs/hooks/useScreenView';

const SelicXSavingAccount = () => {
  useScreenView('SelicXSavingAccount');
  const {
    control,
    errors,
    period,
    isValid,
    dataSavingXSelic,
    showModalSavingXSelic,
    handleSubmit,
    handleSubmitFormSelic,
    setPeriod,
    closeModalSavingXSelic,
  } = useSelicXSavingAccount();

  return (
    <Frame title="Poupança x Selic" canGoBack scrollable>
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
        <Box>
          <MaskTextInputForm
            control={control}
            name="monthValue"
            error={errors.monthValue}
            label="Valor mensal"
            placeholder="R$ 0,00"
            mask={Masks.BRL_CURRENCY}
            keyboardType="numeric"
          />
        </Box>
        <Box>
          <PeriodValueInput
            control={control}
            name="period"
            error={errors.monthValue}
            monthlyLabel="Mes(es)"
            label="Período"
            keyboardType="numeric"
            placeholder="0"
            onSelectPeriod={setPeriod}
            typeSelected={period}
            yearlyLabel="Ano(s)"
          />
        </Box>
      </Box>
      <Box marginVertical={24}>
        <Button
          title="Calcular"
          onPress={handleSubmit(handleSubmitFormSelic)}
          disabled={!isValid}
        />
      </Box>
      <ModalSavingXSelic
        isVisible={showModalSavingXSelic}
        onClose={closeModalSavingXSelic}
        dataModalSaving={dataSavingXSelic}
      />
    </Frame>
  );
};

export default SelicXSavingAccount;
