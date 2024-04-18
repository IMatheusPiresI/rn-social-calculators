import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { colors } from '@resources/theme/colors';

import { IButtonStyleProps } from './types';

export const ButtonOpacity = styled.TouchableOpacity<IButtonStyleProps>`
  flex: 1;
  ${({ borderHorizontal, borderColor }) =>
    borderHorizontal &&
    css`
      border-left-width: 1px;
      border-right-width: 1px;
      border-color: ${colors[borderColor ?? 'primary']};
    `}
`;

export const AnimatedBox = styled(Animated.View)`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const AnimatedText = styled(Animated.Text)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.INTER_BOLD};
`;
