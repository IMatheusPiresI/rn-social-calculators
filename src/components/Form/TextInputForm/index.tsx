import React from 'react';
import * as S from './styles';

import { Controller } from 'react-hook-form';
import { ITextInputFormProps } from './types';
import { Typograph } from '../../UI/Typograph';
import { Box } from '../../UI/Box';
import { colors } from '../../../resources/theme/colors';

export const TextInputForm: React.FC<ITextInputFormProps> = ({
  name,
  label,
  control,
  error,
  ...rest
}) => {
  return (
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
          <Typograph color="textDark">{error?.message}</Typograph>
        </Box>
      )}
    />
  );
};
