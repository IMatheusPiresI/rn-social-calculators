import React from 'react';
import { Box } from '@components/UI/Box';
import { Typograph } from '@components/UI/Typograph';

import { ICardCalculatorProps } from './types';
import * as S from './styles';

export const CardCalculatorType: React.FC<ICardCalculatorProps> = ({
  title,
  image,
  ...rest
}) => (
  <S.CardCalculatorButtonContainer {...rest}>
    <Box flex={1} borderRadius={16} overflow="hidden">
      <S.ImageCalculatorBackground source={image} resizeMode="cover">
        <Box
          flex={1}
          backgroundColor="shadowBlue"
          alignItems="center"
          justifyContent="center"
          padding={12}
        >
          <Typograph
            color="textLight"
            font="INTER_BOLD"
            fontSize={20}
            alignment="center"
          >
            {title}
          </Typograph>
        </Box>
      </S.ImageCalculatorBackground>
    </Box>
  </S.CardCalculatorButtonContainer>
);
