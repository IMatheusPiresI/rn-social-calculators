import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { IWrapperNavigatorProps } from './types';

export const WrapperNavigator = ({ children }: IWrapperNavigatorProps) => (
  <NavigationContainer>{children}</NavigationContainer>
);
