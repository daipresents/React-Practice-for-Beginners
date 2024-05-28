import { useState } from "react";
import './EventCompare.css';

export default function EventCompare() {
  const [result, setResult] = useState('');
  const handleIn = e => setResult(r => `${r}Enter: ${e.target.id}<br />`);
  const handleOut = e => setResult(r => `${r}Leave: ${e.target.id}<br />`);
  return (
    <>
      <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}>
        外 (outer)
        <p id="inner">
          内 （innter）
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: result }}></div>
    </>
  )
}
