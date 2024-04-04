import styled from 'styled-components/native';

import { IBoxProps } from './types';
import theme from '../../../resources/theme';

export const Box = styled.View<IBoxProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.transparent};
`;
