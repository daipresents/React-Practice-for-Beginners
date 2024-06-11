/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';

export default function MaterialBasic() {

  const font = css`
    text-transform: none;
  `;

  return (
    <>
      <h2>Primary</h2>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <h2>Secondary</h2>
      <Button variant="text" color="secondary">Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined" color="secondary">Outlined</Button>

      <h2>大文字・小文字を修正</h2>
      <Button variant="text" css={font}>Text</Button>
      <Button variant="contained" css={font}>Contained</Button>
      <Button variant="outlined" css={font}>Outlined</Button>
    </>
  );
}
