import { createTheme } from '@mui/material';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
].join(',');

const theme = createTheme({
  typography: {
    fontFamily,
  },
});

export default theme;
