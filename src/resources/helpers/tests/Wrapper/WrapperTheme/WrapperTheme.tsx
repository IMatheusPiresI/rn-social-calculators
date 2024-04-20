import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '@resources/theme';

import { IWrapperThemeProps } from './types';

export const WrapperTheme = ({ children }: IWrapperThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
