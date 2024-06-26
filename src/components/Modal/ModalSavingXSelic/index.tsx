import React, { useState } from 'react';
import { Box } from '@components/UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '@resources/theme/colors';
import { Typograph } from '@components/UI/Typograph';
import { formatCurrency } from '@resources/utils/formatCurrency';
import { Button } from '@components/UI/Button';
import { useScreenView } from '@analytics/index';

import { PeriodType } from '../../Form/PeriodValueInput/constants';
import { ModalInterestTableChart } from '../ModalInterestTableChart';

import { IModalSavingXSelicProps } from './types';
import * as S from './styles';

export const ModalSavingXSelic = ({
  isVisible,
  dataModalSaving,
  onClose,
}: IModalSavingXSelicProps) => {
  useScreenView('ModalSavingXSelic');
  const { top } = useSafeAreaInsets();
  const [showModalSelicInterest, setShowModalSelicInterest] =
    useState<boolean>(false);
  const [showModalSavingInterest, setShowModalSavingInterest] =
    useState<boolean>(false);

  const handleOpenModalSelicInterest = () => {
    setShowModalSelicInterest(true);
  };

  const handleCloseModalSelicInterest = () => {
    setShowModalSelicInterest(false);
  };

  const handleOpenModalSavingInterest = () => {
    setShowModalSavingInterest(true);
  };

  const handleCloseModalSavingInterest = () => {
    setShowModalSavingInterest(false);
  };

  const getPeriodString = (period: PeriodType, periodTime: number): string => {
    let periodName = '';

    if (period === PeriodType.YEARLY) {
      periodName = periodTime > 1 ? 'anos' : 'ano';
    } else {
      periodName = periodTime > 1 ? 'meses' : 'mês';
    }

    return `${periodTime} ${periodName}`;
  };

  return (
    <S.RNModal
      visible={isVisible}
      transparent
      animationType="slide"
      testID="modalSavingXSelic"
    >
      <Box
        flex={1}
        backgroundColor="primary"
        paddingTop={top}
        paddingHorizontal={20}
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex={1}>
            <Typograph fontSize={22} color="textLight" font="INTER_BOLD">
              Poupança X Selic
            </Typograph>
          </Box>
          <S.ButtonOpacity onPress={onClose}>
            <XCircle color={colors.iconLight} size={56} weight="thin" />
          </S.ButtonOpacity>
        </Box>

        {dataModalSaving && (
          <Box flex={1} marginTop={20}>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={12}
              paddingHorizontal={16}
              paddingVertical={12}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Valor investido na poupança:
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                R${formatCurrency(dataModalSaving.savingValue)}
              </Typograph>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={12}
              paddingHorizontal={16}
              paddingVertical={12}
              marginTop={20}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Valor investido na SELIC
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                R${formatCurrency(dataModalSaving.selicValue)}
              </Typograph>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={12}
              paddingHorizontal={16}
              paddingVertical={12}
              marginTop={20}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Diferença de:
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                R$
                {formatCurrency(
                  dataModalSaving.selicValue - dataModalSaving.savingValue,
                )}
              </Typograph>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={12}
              paddingHorizontal={16}
              paddingVertical={12}
              marginTop={20}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                No período de:
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                {getPeriodString(
                  dataModalSaving.period,
                  dataModalSaving.periodTime,
                )}
              </Typograph>
            </Box>
            <Box gap={12} paddingHorizontal={16} marginTop={12}>
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Você também pode visualizar o rendimento de cada um:
              </Typograph>
              <Button
                title="Poupança"
                variant="secondary"
                onPress={handleOpenModalSavingInterest}
                testID="modalSavingXSelicButtonSaving"
              />
              <Button
                title="Selic"
                variant="secondary"
                onPress={handleOpenModalSelicInterest}
                testID="modalSavingXSelicButtonSelic"
              />
            </Box>
            <ModalInterestTableChart
              label="Rendimento Poupança"
              dataChart={dataModalSaving.saving.dataChart}
              dataTable={dataModalSaving.saving.dataTable}
              isVisible={showModalSavingInterest}
              onClose={handleCloseModalSavingInterest}
            />
            <ModalInterestTableChart
              label="Rendimento Selic"
              dataChart={dataModalSaving.selic.dataChart}
              dataTable={dataModalSaving.selic.dataTable}
              isVisible={showModalSelicInterest}
              onClose={handleCloseModalSelicInterest}
            />
          </Box>
        )}
      </Box>
    </S.RNModal>
  );
};
