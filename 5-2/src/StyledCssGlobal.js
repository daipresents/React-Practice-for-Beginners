import css, { globalCss, resolveCss } from './StyledCssGlobal.css';

export default function StyledCssGlobal() {
  return (
    <>
      {/* 外部スタイルをインポート */}
      <style jsx>{css}</style>
      <style jsx>{globalCss}</style>
      <h6>GlobalCSS適用</h6>
      {resolveCss.styles}
      <div className={`panelGlobal ${resolveCss.className}`}>外部ファイルからのGlobal CSS適用</div >
    </>
  );
}
