import '@mantine/core/styles.css';
import { Router } from './Router';
import { theme } from './theme';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import './fonts.css';

export default function App() {
  return (
    <MantineProvider withGlobalClasses theme={theme} >
        <Router />
    </MantineProvider>
  );
}
