import css from './StyledCss.css';
export default function StyledCss() {
  return (
    <>
      {/* 外部スタイルをインポート */}
      <style jsx>{css}</style>
      <h5>ローカルスタイルの一部を適用</h5>
      <div className="panelExternal">外部ファイルからの適用</div>
    </>
  );
}
