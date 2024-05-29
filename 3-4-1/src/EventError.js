import { useState } from 'react';
import noimage from './images/noimage.jpg';

export default function EventError({ src, alt }) {
  const [path, setPath] = useState(src);
  const handleError = () => setPath(noimage);
  return (
    <img src={path} alt={alt} onError={handleError} />
  );
}
