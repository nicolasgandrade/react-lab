import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export function ImageUpload({
  className = '',
  imagePreviewUrl,
  imagePreviewClassName = '',
  setImage,
  onSetReference,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!onSetReference) return;
    onSetReference(inputRef?.current);
  }, [inputRef?.current]);

  const openFileSelection = () => {
    inputRef?.current?.click();
  };

  const onImageChange = () => {
    if (!inputRef?.current?.files?.length) return;

    const file = inputRef?.current?.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setImage({
        preview: fileReader.result,
        file,
      });
    };
  };

  return (
    <div
      className={`uploadImageContainer ${className}`}
      onClick={openFileSelection}
    >
      {imagePreviewUrl && (
        <img src={imagePreviewUrl} className={imagePreviewClassName} />
      )}
      <input
        type='file'
        className='hidden'
        accept='image/*'
        ref={inputRef}
        onChange={onImageChange}
      />
    </div>
  );
}

interface ImageUploadProps {
  className?: string;
  imagePreviewUrl?: string;
  imagePreviewClassName?: string;
  setImage: Dispatch<SetStateAction<any>>;
  onSetReference?: (obj: any) => any;
}
