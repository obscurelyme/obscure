import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    quandary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    quandary: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    quandary: true;
  }
}
