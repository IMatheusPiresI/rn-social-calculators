import React from 'react';

import * as S from './styles';
import theme from '../../../resources/theme';
import { ITypographProps } from './types';

export const Typograph: React.FC<ITypographProps> = ({
  children,
  color,
  font = 'INTER_REGULAR',
  fontSize = 12,
  flex,
  alignment,
  lineHeight,
  ...rest
}) => {
  const getColor = (): string => {
    if (color) {
      return theme.colors[color];
    }
    return theme.colors.textDark;
  };

  return (
    <S.TypographText
      color={getColor()}
      font={font}
      fontSize={fontSize}
      flex={flex}
      alignment={alignment}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </S.TypographText>
  );
};
