import MyButtonArgs from './MyButtonArgs';

// Controls タブで設定をさわれるようになる。
export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButtonArgs,

  // Propsの既定値を設定
  args: {
    label: 'Push',
  },

  // argTypesプロパティだけで方を宣言する
  // 優先度は PropTypes < argTypes
  argTypes: {
    primary: {
      type: 'boolean',
      description: 'Primaryカラーを有効にするか',
    },
    backgroundColor: {
      type: 'string',
      description: '背景色'
    },
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large']
      },
      control: { type: 'select' },
      description: 'ボタンの大きさ'
    },
    label: {
      type: 'string',
      descripton: 'ボタンのキャプション'
    },
    onClick: {
      type: 'function',
      description: 'clickハンドラー'
    }
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
  render: args => <MyButtonArgs {...args} />,
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
