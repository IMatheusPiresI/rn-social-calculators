import React from 'react';

import * as S from './styles';
import { Typograph } from '../Typograph';
import { IButtonProps } from './types';

export const Button: React.FC<IButtonProps> = ({ title, ...rest }) => {
  return (
    <S.Button {...rest}>
      <Typograph color="textLight" fontSize={16} font="INTER_BOLD">
        {title}
      </Typograph>
    </S.Button>
  );
};
