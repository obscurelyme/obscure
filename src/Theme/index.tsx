import { PropsWithChildren } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#232323',
      paper: '#232323',
    },
    primary: {
      main: '#00FF99',
    },
    secondary: {
      main: '#14B0CC',
    },
    tertiary: {
      main: '#3D8B99',
    },
    quandary: {
      main: '#CC1465',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 18,
    },
  },
});

export default function ObscureThemeProvider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
