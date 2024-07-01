import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // 描画結果をコンソール上で確認する場合
  //const { debug, baseElement } = render(<App />);
  //debug(baseElement);

  // containerオプションで文書ツリーを置き換える
  // const para = document.createElement('p');
  // const { debug, baseElement } = render(<App />, {
  //   container: document.body.appendChild(para)
  // });
  // debug(baseElement);
  // 以下のようにPが入る。
  // <p>
  // <div
  //   class="App"
  // >
  //   <header
  //     class="App-header"
  //   >

  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
