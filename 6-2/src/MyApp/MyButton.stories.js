import MyButton from './MyButton';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButton,
  parameters: {
    // 背景色設定。コンポーネント単位の適用
    // backgrounds: {
    //   values: [
    //     { name: 'ghostwhite', value: '#f8f8ff' },
    //     { name: 'aquamarine', value: '#7fffd4' },
    //     { name: 'coral', value: '#ff7f50' },
    //   ],
    // },
    // レイアウト設定（デコレータとぶつかるとうまくいかないので注意）
    layout: 'centered',
  },
  // デコレーターを使った独自レイアウト適用
  // decorators: [
  //   Story => (
  //     <div style={{
  //       height: 150,
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: '#ccc',
  //     }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
  // ドキュメントの追加
  // MDXファイルを使う場合はコメントアウトが必要
  //tags: ['autodocs'],
};

export const Index = {
  parameters: {
    // 背景色設定。特定のストーリーへの適用
    backgrounds: {
      values: [
        { name: 'ghostwhite', value: '#f8f8ff' },
        { name: 'aquamarine', value: '#7fffd4' },
        { name: 'coral', value: '#ff7f50' },
      ],
    },
  },

  render: () =>
    <MyButton primary size="medium" label="ボタン"
      onClick={() => console.log('Hello, Storybook!!')}
    />
};

export const White = {
  render: () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />
};
