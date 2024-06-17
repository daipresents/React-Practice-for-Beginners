import MyButtonPropTypes from './MyButtonPropTypes';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButtonPropTypes,

  // PropTypesでは指定できない情報をargsTypeで追加。ここではsizeをラジオボタンで選択できるようにしている。
  argsTypes: {
    size: {
      control: { type: 'select' },
    },
  },
  // ドキュメントの追加
  tags: ['autodocs'],
};

export const IndexPropTypes = {
  render: () =>
    <MyButtonPropTypes primary size="medium" label="ボタン"
      onClick={() => console.log('Hello, Storybook!!')}
    />
};

export const WhitePropTypes = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: () => console.log('Hello, Storybook!!')
  }
};
