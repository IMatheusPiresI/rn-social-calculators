import styled from 'styled-components/native';

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.INTER_MEDIUM};
  height: 46px;
  padding: 0 16px;
`;
