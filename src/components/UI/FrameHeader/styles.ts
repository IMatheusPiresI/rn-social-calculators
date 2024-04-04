import styled from 'styled-components/native';

export const ImageLogo = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 8px;
`;

export const ButtonGoBack = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
  hitSlop: {
    bottom: 20,
    left: 20,
    right: 20,
    top: 20,
  },
}))``;
