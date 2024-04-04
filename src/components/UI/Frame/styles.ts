import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  bounces: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
}))``;
