import styled, { css } from 'styled-components/native';
import { IButtonVariant } from './types';

export const Button = styled.TouchableOpacity<IButtonVariant>`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  ${({ variant }) =>
    variant &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
    `}
`;
