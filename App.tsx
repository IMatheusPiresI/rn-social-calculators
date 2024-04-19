import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import theme from './src/resources/theme';
import AppRoutes from './src/routes';
import { fetchRemoteConfig } from './src/services/firebase/remoteConfig';

const App = () => {
  useEffect(() => {
    fetchRemoteConfig();
  }, []);
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
