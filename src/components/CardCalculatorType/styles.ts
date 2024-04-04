import styled from 'styled-components/native';

export const CardCalculatorButtonContainer = styled.TouchableOpacity.attrs(
  () => ({
    activeOpacity: 0.7,
  }),
)`
  flex: 1;
  height: 150px;
`;

export const ImageCalculatorBackground = styled.ImageBackground`
  flex: 1;
`;
