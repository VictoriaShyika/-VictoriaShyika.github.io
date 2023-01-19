import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import { components } from './components';

const theme = createTheme({
  typography: typography,
  breakpoints: breakpoints,
  components: components,
});

export default theme;
