import React from 'react';

import { Typograph } from '../Typograph';

import * as S from './styles';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({ title, ...rest }) => (
  <S.Button {...rest}>
    <Typograph
      color={rest.variant === 'secondary' ? 'primary' : 'textLight'}
      fontSize={16}
      font="INTER_BOLD"
    >
      {title}
    </Typograph>
  </S.Button>
);
