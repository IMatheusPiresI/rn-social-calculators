import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack';

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
export default AppRoutes;
