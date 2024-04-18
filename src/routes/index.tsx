import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { StackRoutes } from './Stack';

const AppRoutes = () => (
  <NavigationContainer
    onReady={() => {
      SplashScreen.hide();
    }}
  >
    <StackRoutes />
  </NavigationContainer>
);
export default AppRoutes;
