import { useState } from 'react';

export default function EventError({ src, alt }) {
  const [path, setPath] = useState(src);
  const handleError = () => setPath('https://web-deli.com/image/home_chara.gif');
  return (
    <img src={path} alt={alt} onError={handleError} />
  );
}
