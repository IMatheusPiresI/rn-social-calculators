import React, { useState } from 'react';

import * as S from './styles';
import { Box } from '../../UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '../../../resources/theme/colors';
import { Typograph } from '../../UI/Typograph';
import { SelectTypeRenderInterest } from './SelectTypeRenderInterest';
import { IModalInterestTableChartProps } from './types';
import { useNavigation } from '@react-navigation/native';

export const ModalInterestTableChart: React.FC<
  IModalInterestTableChartProps
> = ({ dataChart, dataTable, isVisible, onClose }) => {
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
          <Typograph fontSize={22} color="textLight" font="INTER_BOLD">
            Rendimento
          </Typograph>
          <S.ButtonOpacity onPress={onClose}>
            <XCircle color={colors.iconLight} size={56} weight="thin" />
          </S.ButtonOpacity>
        </Box>
        <Box flex={1} marginTop={16} marginBottom={bottom + 20}>
          <SelectTypeRenderInterest
            dataChart={dataChart}
            dataTable={dataTable}
          />
        </Box>
      </Box>
    </S.RNModal>
  );
};
