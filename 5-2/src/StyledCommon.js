import styled from 'styled-components';
import PanelBase from './StyledCommon.css';

const MyPanel = styled.div`
  ${PanelBase}
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;

export default function StyledCommon() {
  return (
    <>
      <MyPanel><b>Styled Components</b>は既存の要素にスタイルづけしたコンポーネントを作成する。</MyPanel>
    </>
  );
}
