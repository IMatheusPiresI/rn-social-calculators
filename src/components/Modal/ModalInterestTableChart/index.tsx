import React from 'react';
import { Box } from '@components/UI/Box';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { XCircle } from 'phosphor-react-native';
import { colors } from '@resources/theme/colors';
import { Typograph } from '@components/UI/Typograph';
import { useScreenView } from '@analytics/index';

import { SelectTypeRenderInterest } from './SelectTypeRenderInterest';
import { IModalInterestTableChartProps } from './types';
import * as S from './styles';

export const ModalInterestTableChart: React.FC<
  IModalInterestTableChartProps
> = ({ dataChart, dataTable, isVisible, label, onClose }) => {
  useScreenView('ModalSimplesInterest');
  const { top, bottom } = useSafeAreaInsets();

  return (
    <S.RNModal visible={isVisible} transparent animationType="slide">
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
              {label ?? 'Rendimento'}
            </Typograph>
          </Box>
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
