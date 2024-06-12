import MyButtonAction from './MyButtonAction';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButtonAction,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
};

export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: () => console.log('Hello, Index!!'),
  },
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff'
  }
};
