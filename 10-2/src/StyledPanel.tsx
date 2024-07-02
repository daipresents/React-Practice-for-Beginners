import { ReactNode } from 'react';

// childrenの型定義はReactNodeで統一できる。
type StyledPanelProps = {
  children: ReactNode
};

export default function StylePanel({children}: StyledPanelProps) {
  return (
    <div style={{
      margin: 50,
      padding: 20,
      border: '1px solid #000',
      width: 'fit-content',
      boxShadow: '10px 5px 5px #999',
      backgroundColor: '#fff'
    }}>
      {children}
    </div>
  );
}
