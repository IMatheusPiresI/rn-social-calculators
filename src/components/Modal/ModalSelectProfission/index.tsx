import React from 'react';

import * as S from './styles';
import { Box } from '../../UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '../../../resources/theme/colors';
import { Typograph } from '../../UI/Typograph';
import { IModalSelectProfissionProps } from './types';
import { profissions, profissionsMock } from './constants';

export const ModalSelectProfission = ({
  isVisible,
  onClose,
  onSelectProfission,
}: IModalSelectProfissionProps) => {
  const { top, bottom } = useSafeAreaInsets();

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
            Selecione sua profissão
          </Typograph>
          <S.ButtonOpacity onPress={onClose}>
            <XCircle color={colors.iconLight} size={56} weight="thin" />
          </S.ButtonOpacity>
        </Box>
        <Box flex={1} marginTop={16} marginBottom={bottom + 20}>
          {profissionsMock.map((profission) => (
            <S.ButtonOpacity
              onPress={() => onSelectProfission(profission.profission)}
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
