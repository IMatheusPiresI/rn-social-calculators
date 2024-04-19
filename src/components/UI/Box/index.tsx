import React, { PropsWithChildren } from 'react';

import * as S from './styles';
import { IBoxProps } from './types';

export const Box: React.FC<PropsWithChildren<IBoxProps>> = ({
  children,
  ...rest
}) => (
  <S.Box {...rest} testID="box">
    {children}
  </S.Box>
);
