import React from 'react';
import ReactDOM from 'react-dom/client';
import StyledBasic from './StyleBasic';
import StyledDynamic from './StyleDynamic';
import StyledCommon from './StyledCommon';
import StyledComponent from './StyledComponents';
import { MyButton, MyStyledButton } from './StyledComponents2';
import StyledComponentsProps from './StyledComponentsProps';
import StyledCss from './StyledCss';
import StyledCssGlobal from './StyledCssGlobal';
import GlobalStyle from './StyledGlobal';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>Styled Components</h1>

      <h2>Props経由で動的なスタイルを設定する</h2>
      <StyledComponentsProps />
      <hr />

      <h2>グローバルなスタイルを定義する</h2>
      <GlobalStyle />
      <div class="global">Globalな部分</div>
      <hr />

      <h2>スタイル定義を外部化する</h2>
      <StyledCommon />
      <hr />

      <h2>既存のコンポーネントにスタイル付けする</h2>
      <MyButton>ボタン</MyButton>
      <MyStyledButton>ぼったん</MyStyledButton>
      <hr />

      <h2>Styled Components</h2>
      <StyledComponent />
      <hr />

      <h3>ダイナミックスタイル</h3>
      <StyledDynamic theme={{
        radius: true,
        color: 'pink'
      }} />
      <hr />

      <h3 class="external">Styled JSXの外部化 Global化</h3>
      <StyledCssGlobal />
      <hr />

      <h3>Styled JSXの外部化</h3>
      <StyledCss />
      <hr />

      <h3 class="basic">Styled JSXの基本</h3>
      <StyledBasic />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
