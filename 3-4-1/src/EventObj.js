export default function EventObj() {
  // e => イベントオブジェクト
  const handleClick = e => console.log(e);

  return (
    <button onClick={handleClick}>クリック</button>
  );
}
