import styled from 'styled-components';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: white;
  border-radius: ${props => (props.theme.radius ? '10px' : '0px')};
  background-color: ${props => props.theme.color};
`
export default function StyledComponentsProps({ theme }) {
  return (
    <MyPanel theme={{
      radius: true,
      color: 'green'
    }}><b>Styled Components Props</b>で定義しています。
    </MyPanel>
  );
}
