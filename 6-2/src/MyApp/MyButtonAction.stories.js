import MyButtonAction from './MyButtonAction';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButtonAction,
  argTypes: {
    // .stories.jsファイル単位でActionの対象となる属性を変更する場合はストーリーファイルに以下を記述
    handleClick: { action: 'clicked' }
  },
};

export const Index = {
  render: () =>
    <MyButtonAction primary size="medium" label="ボタン"
      onClick={() => console.log('Hello, Storybook!!')}
    />
};

// Actionタブにログが表示されるはずだがでてこない。
export const White = {
  render: () =>
    <MyButtonAction size="small" label="ボタン" backgroundColor="#fff" />
};
