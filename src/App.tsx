import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { NotFound, RequireAuth } from './components';
import { LandingScreen, LoginScreen, TeamsScreen } from './screens';
import { TestScreen } from './screens/test-screen/test.screen';
import { GlobalStyle } from './utils';

function App() {
  // theme toggler
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const { pathname } = useLocation();

  // routes for landing page
  if (pathname === '/' || pathname === '/teams') {
    return (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/teams" element={<TeamsScreen />} />
        </Routes>
      </>
    );
  }
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ fontFamily: 'Inter', colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/test" element={<TestScreen />} />
          <Route element={<RequireAuth />}>
            {/* all protected routes goes here */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
