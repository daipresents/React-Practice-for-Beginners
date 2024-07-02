import { Button } from '@mui/material';
import { useContext } from 'react';
import ThemeContext, { ThemeContextType } from './ThemeContext';

export default function HookThemeButton() {
  const { mode, toggleMode } = useContext<Partial<ThemeContextType>>(ThemeContext);
  return (
    <Button variant="contained" onClick={toggleMode}>
      Mode {mode}
    </Button>
  );
}
