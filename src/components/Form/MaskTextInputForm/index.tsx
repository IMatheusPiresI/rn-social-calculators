import React from 'react';
import { Controller } from 'react-hook-form';
import { Typograph } from '@components/UI/Typograph';
import { Box } from '@components/UI/Box';
import { colors } from '@resources/theme/colors';

import { ITextInputFormProps } from './types';
import * as S from './styles';

export const MaskTextInputForm: React.FC<ITextInputFormProps> = ({
  name,
  label,
  control,
  error,
  hideError,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Box>
        {label && (
          <Box marginBottom={6}>
            <Typograph color="primary" font="INTER_BOLD" fontSize={14}>
              {label}
            </Typograph>
          </Box>
        )}

        <S.Input
          onChangeText={onChange}
          value={value}
          placeholderTextColor={colors.placeholder}
          {...rest}
        />
        {!hideError && <Typograph color="error">{error?.message}</Typograph>}
      </Box>
    )}
  />
);
