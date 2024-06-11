import { Button, CssBaseline } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function MaterialMode() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode(prev =>
    prev === 'light' ? 'dark' : 'light'
  );

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
      <Button variant="contained" onClick={toggleMode}>
        Mode {mode}
      </Button>
    </ThemeProvider>
  );
}
