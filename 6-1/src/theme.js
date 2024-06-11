import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/color/#color-palette
// https://bareynol.github.io/mui-theme-creator/
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  },
  spacing: 10,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

export default theme;
