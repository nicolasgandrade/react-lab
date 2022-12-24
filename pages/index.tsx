import { useRef, useState } from 'react';

import Avatar from '../components/avatar';
import { ImageUpload } from '../components/image-upload';

export default function Home() {
  const [image, setImage] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <button onClick={() => inputRef.current?.click()}>
        Escolher arquivo
      </button>
      <ImageUpload
        setImage={setImage}
        imagePreviewUrl={image?.preview}
        onSetReference={(ref) => (inputRef.current = ref)}
      />
      <Avatar imageUrl='' />
    </div>
  );
}
