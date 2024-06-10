/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function EmotionJsx() {
  // const styles = css`
  //   width: 300px;
  //   padding: 10px;
  //   border: 1px solid #000;
  //   border-radius: 5px;
  //   background-color: royalblue;
  //   color: white;
  // `;
  // もしくは↓のようにstyle属性ぽい書き方ができる。
  const styles = css({
    width: 300,
    padding: 10,
    border: '1px solid #000',
    borderRadius: 5,
    backgroundColor: 'royalblue',
    color: 'white',
  });

  const others = css({
    margin: 100,
  });

  // Styleの継承もできる
  const parent = css`
    color: red;
  `;

  const plus = css`
    ${parent}
    font-size: 30px;
  `;

  return (
    <div css={[styles, others, plus]}> <b>Styled JSXみたいな</b>Emotion</ div>
  );
}
