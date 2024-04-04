import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/resources/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from './src/routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
