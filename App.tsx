import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/resources/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from './src/routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
