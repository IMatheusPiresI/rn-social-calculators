import styled from 'styled-components/native';
import theme from '@resources/theme';

import { IBoxProps } from './types';

export const Box = styled.View<IBoxProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.transparent};
`;
