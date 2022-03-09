import { createTheme } from '@mui/material';
import { koKR } from '@mui/material/locale';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
].join(',');

const theme = createTheme(
  {
    typography: {
      fontFamily,
    },
  },
  koKR
);

export default theme;
