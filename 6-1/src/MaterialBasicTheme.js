/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';

export default function MaterialBasicTheme() {

  const font = css`
    text-transform: none;
  `;

  return (
    <>
      <h2>Primary</h2>
      <Button>Contained</Button>
      <Button>Contained</Button>
      <Button>Contained</Button>
    </>
  );
}
