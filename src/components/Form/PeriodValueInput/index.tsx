import React from 'react';
import { Box } from '@components/UI/Box';
import { colors } from '@resources/theme/colors';
import { Typograph } from '@components/UI/Typograph';

import { MaskTextInputForm } from '../MaskTextInputForm';
import { ButtonSelectAnimated } from '../../ButtonSelectAnimated';

import { ITextInputFormProps } from './types';
import { PeriodType } from './constants';

export const PeriodValueInput: React.FC<ITextInputFormProps> = ({
  name,
  label,
  control,
  error,
  typeSelected,
  monthlyLabel,
  yearlyLabel,
  onSelectPeriod,
  ...rest
}) => (
  <Box testID="periodValueInput">
    <Box marginBottom={6}>
      <Typograph color="primary" font="INTER_BOLD" fontSize={14}>
        {label}
      </Typograph>
    </Box>
    <Box flexDirection="row" gap={12} marginBottom={6}>
      <Box flex={1}>
        <MaskTextInputForm
          placeholderTextColor={colors.placeholder}
          error={error}
          name={name}
          control={control}
          {...rest}
          hideError
        />
      </Box>
      <Box
        flexDirection="row"
        flex={1}
        borderRadius={8}
        overflow="hidden"
        borderWidth={1}
        borderColor={colors.primary}
        height={46}
      >
        <ButtonSelectAnimated
          isActive={typeSelected === PeriodType.YEARLY}
          label={yearlyLabel}
          onPress={() => onSelectPeriod(PeriodType.YEARLY)}
          boxInativeColor="transparent"
          boxActiveColor="primary"
          textActiveColor="textLight"
          textInativeColor="primary"
          testID="periodValueInputYealyButton"
        />
        <ButtonSelectAnimated
          isActive={typeSelected === PeriodType.MONTHLY}
          label={monthlyLabel}
          onPress={() => onSelectPeriod(PeriodType.MONTHLY)}
          boxInativeColor="transparent"
          boxActiveColor="primary"
          textActiveColor="textLight"
          textInativeColor="primary"
          testID="periodValueInputMonthButton"
        />
      </Box>
    </Box>
    <Typograph color="error">{error?.message}</Typograph>
  </Box>
);
