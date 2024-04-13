import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';
import { colors } from '../../../resources/theme/colors';
import { Box } from '../../UI/Box';
import { Typograph } from '../../UI/Typograph';
import { IHeaderInfoChartProps } from './types';
import { useState } from 'react';
import { formatCurrency } from '../../../resources/utils/formatCurrency';

export const HeaderInfoChart = ({
  accumulatedValue,
  interestedValue,
}: IHeaderInfoChartProps) => {
  const [accumulated, setAccumulatedValue] = useState<number>(0);
  const [interested, setInterested] = useState<number>(0);

  useAnimatedReaction(
    () => {
      return {
        accumulatedValue: accumulatedValue.value,
        interestedValue: interestedValue.value,
      };
    },
    ({ accumulatedValue, interestedValue }) => {
      runOnJS(setAccumulatedValue)(accumulatedValue);
      runOnJS(setInterested)(interestedValue);
    },
  );

  return (
    <Box
      flexDirection="row"
      borderWidth={1}
      borderRadius={8}
      borderColor={colors.borderLight}
    >
      <Box flex={1} alignItems="center" padding={12}>
        <Typograph fontSize={14} font="INTER_MEDIUM" color="textLight">
          Saldo acumulado
        </Typograph>
        <Box marginTop={12}>
          <Typograph fontSize={14} font="INTER_BOLD" color="textLight">
            R${formatCurrency(accumulated)}
          </Typograph>
        </Box>
      </Box>
      <Box width={1} backgroundColor="borderLight" />
      <Box flex={1} alignItems="center" padding={12}>
        <Typograph fontSize={14} font="INTER_MEDIUM" color="textLight">
          Mês
        </Typograph>
        <Box marginTop={12}>
          <Typograph fontSize={14} font="INTER_BOLD" color="textLight">
            {interested}
          </Typograph>
        </Box>
      </Box>
    </Box>
  );
};
