import React from 'react';

import { IWrapperProps } from './types';

import { WrapperNavigator, WrapperTheme } from '.';

export const Wrapper = ({ children }: IWrapperProps) => (
  <WrapperNavigator>
    <WrapperTheme>{children}</WrapperTheme>
  </WrapperNavigator>
);
