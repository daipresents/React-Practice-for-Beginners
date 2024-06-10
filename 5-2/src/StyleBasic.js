export default function StyledBasic() {
  return (
    <>
      {/* Styled JSXによるスタイル定義 */}

      {/* グローバルスタイル */}
      <style jsx global>{`
        h3.basic {
          background-color: Red;
        }
      `}</style>

      {/* ローカルスタイル */}
      <style jsx>{`
        .panel {
          width: 300px;
          padding: 10px;
          border: 10px solid #000;
          border-radius: 5px;
          background-color: royalblue;
          color: white;
        }
      `}</style>

      {/* ローカルスタイルの一部をグローバルにする */}
      <style jsx>{`
        :global(h4) {
          color: Blue;
        }
      `}</style>

      <h4 class="basic">ローカルスタイルの一部を適用</h4>
      <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義を差し込めます。</div>
    </>
  );
}
