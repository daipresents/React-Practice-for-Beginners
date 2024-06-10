import css from 'styled-jsx/css';

export default css`
  .panelGlobal {
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  }
`

export const globalCss = css.global`
  h3.external {
    background-color: Green;
  }
`;

export const resolveCss = css.resolve`
  .panelGlobal {
    margin: 50px;
  };
`
