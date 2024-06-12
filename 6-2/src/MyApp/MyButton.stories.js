import MyButton from './MyButton';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButton,
};

export const Index = {
  render: () =>
    <MyButton primary size="medium" label="ボタン"
      onClick={() => console.log('Hello, Storybook!!')}
    />
};

export const White = {
  render: () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />
};
