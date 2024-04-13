import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack';
import SplashScreen from 'react-native-splash-screen';

const AppRoutes = () => {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}
    >
      <StackRoutes />
    </NavigationContainer>
  );
};
export default AppRoutes;
