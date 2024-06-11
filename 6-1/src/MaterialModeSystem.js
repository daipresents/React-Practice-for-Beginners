import { Button, CssBaseline, useMediaQuery } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function MaterialModeSystem() {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ?
    'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        // ライトモード
        ? {
          primary: amber,
        }
        // ダークモード
        : {
          primary: {
            main: grey[500],
            contrastText: '#fff'
          },
          background: {
            default: grey[900],
            paper: grey[900],
          },
        }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">
        Mode {mode}
      </Button>
    </ThemeProvider >
  );
}
