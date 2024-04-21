import React from 'react';
import { Box } from '@components/UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '@resources/theme/colors';
import { Typograph } from '@components/UI/Typograph';
import {
  profissions,
  profissionsMock,
} from '@screens/EmergencyReserve/hooks/useEmergencyReserve/constants';
import { useScreenView } from '@analytics/index';

import { IModalSelectProfissionProps } from './types';
import * as S from './styles';

export const ModalSelectProfission = ({
  isVisible,
  onClose,
  onSelectProfission,
}: IModalSelectProfissionProps) => {
  useScreenView('ModalSelectProfission');
  const { top, bottom } = useSafeAreaInsets();

  return (
    <S.RNModal
      visible={isVisible}
      transparent
      animationType="slide"
      testID="modalSelectProfission"
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
              Selecione sua profissão
            </Typograph>
          </Box>
          <S.ButtonOpacity onPress={onClose}>
            <XCircle color={colors.iconLight} size={56} weight="thin" />
          </S.ButtonOpacity>
        </Box>
        <Box flex={1} marginTop={16} marginBottom={bottom + 20}>
          {profissionsMock.map((profission) => (
            <S.ButtonOpacity
              onPress={() => onSelectProfission(profission.profission)}
              key={profission.index}
            >
              <Box paddingVertical={6}>
                <Typograph fontSize={18} font="INTER_BOLD" color="textLight">
                  {profissions[profission.profission]}
                </Typograph>
              </Box>
            </S.ButtonOpacity>
          ))}
        </Box>
      </Box>
    </S.RNModal>
  );
};
