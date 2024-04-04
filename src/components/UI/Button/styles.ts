import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
