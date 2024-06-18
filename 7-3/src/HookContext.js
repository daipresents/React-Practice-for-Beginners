/**
 * コンテキストを使うと上位コンポーネントに依存してしまうため、
 * ロケール、タイムゾーン、テーマなどアプリ全体で利用するような値の管理で使われる。
 */
import { createContext } from 'react';
import { HookContextChild } from './HookContextChild';

export const MyAppContext = createContext();

const config = {
  title: 'React入門',
  lang: 'ja-JP',
};

export default function HookContext() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}
