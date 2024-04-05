import React from 'react';

import * as S from './styles';
import { Box } from '../../UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '../../../resources/theme/colors';
import { Typograph } from '../../UI/Typograph';
import { IModalEmergencyReserveProps } from './types';
import { formatCurrency } from '../../../resources/utils/formatCurrency';

export const ModalEmergencyReserve = ({
  isVisible,
  emergencyReserveData,
  onClose,
}: IModalEmergencyReserveProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <S.RNModal visible={isVisible} transparent animationType="slide">
      <Box
        flex={1}
        backgroundColor="primary"
        paddingTop={top + 20}
        paddingHorizontal={20}
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typograph fontSize={22} color="textLight" font="INTER_BOLD" flex>
            Reserva de Emergência
          </Typograph>
          <S.ButtonOpacity onPress={onClose}>
            <XCircle color={colors.iconLight} size={56} weight="thin" />
          </S.ButtonOpacity>
        </Box>
        {emergencyReserveData && (
          <Box flex={1} marginTop={32}>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={20}
              paddingHorizontal={16}
              paddingVertical={16}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Sua reserva de emergência deve ser de:
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                R$ {formatCurrency(emergencyReserveData.reserveEmergencyValue)}
              </Typograph>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={20}
              paddingHorizontal={16}
              paddingVertical={16}
              marginTop={32}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Guardando{' '}
                <Typograph fontSize={22} color="textLight" font="INTER_BOLD">
                  {emergencyReserveData.percentageSave}%
                </Typograph>{' '}
                do seu salário
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                R$ {formatCurrency(emergencyReserveData.saveMonthly)}
              </Typograph>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={12}
              borderColor={colors.borderLight}
              gap={20}
              paddingHorizontal={16}
              paddingVertical={16}
              marginTop={32}
            >
              <Typograph fontSize={16} color="textLight" font="INTER_BOLD">
                Tempo para completar sua reserva:
              </Typograph>
              <Typograph fontSize={26} color="textLight" font="INTER_BOLD">
                {emergencyReserveData.timeFinishInMonth} meses
              </Typograph>
            </Box>
          </Box>
        )}
      </Box>
    </S.RNModal>
  );
};
