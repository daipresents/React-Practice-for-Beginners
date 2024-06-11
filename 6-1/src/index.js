import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import FormMui from './FormMui';
import MaterialBasic from './MaterialBasic';
import MaterialBasicTheme from './MaterialBasicTheme';
import MaterialDrawer from './MaterialDrawer';
import MaterialGrid from './MaterialGrid';
import MaterialMode from './MaterialMode';
import MaterialModeSystem from './MaterialModeSystem';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>React Hook Form + MUI</h1>
      <FormMui />

      <h1>Theme</h1>
      <h2>System</h2>
      <MaterialModeSystem />

      <h2>ダークモード</h2>
      <MaterialMode />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MaterialBasicTheme />
      </ThemeProvider>

      <h1>MUI Basic</h1>
      <MaterialGrid />
      <MaterialDrawer />
      <MaterialBasic />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
