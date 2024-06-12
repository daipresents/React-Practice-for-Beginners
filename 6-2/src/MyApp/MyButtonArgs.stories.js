import MyButton from './MyButton';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButton,

  // Propsの既定値を設定
  args: {
    label: 'Push',
  },
};

export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: () => console.log('Hello, Storybook!!')
  }
};


// renderオプションと組み合わせたパターンもできるが、省略したほうがいい。
export const Index2 = {
  render: args => <MyButton {...args} />,
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: 'red'
  }
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff'
  }
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow'
  }
};

export const Blue = {
  args: {
    backgroundColor: 'blue'
  }
};
