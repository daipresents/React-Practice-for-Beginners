export default function StyledDynamic({ theme }) {
  return (
    <>
      <style jsx>{`
      .panelDynamic {
        width: 300px;
        padding: 10px;
        border: 1px solid #000;
        color: white;
      }
    `}</style>
      <style jsx>{`
      .panelDynamic {
        border-radius: ${theme.radius ? '10px' : '0px'};
        background-color: ${theme.color};
      }
    `}</style>
      <div className="panelDynamic"><b>Styled JSX</b>は、JSX式にスタイル定義を適用します。</div>
    </>
  );
}
