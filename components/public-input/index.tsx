import Image from 'next/image';
import { HTMLInputTypeAttribute } from 'react';

export default function PublicInput({
  iconUrl = '',
  inputType,
  inputPlaceholder = '',
  inputValue = '',
  hasValidationMessage = false,
  validationString = '',
  onValueChange,
}: PublicInputProps) {
  return (
    <div className={`publicInputContainer`}>
      <div className={`publicInput`}>
        <Image
          src={iconUrl}
          alt='Logo'
          className='inputIcon'
          width={20}
          height={20}
        />

        <input
          type={inputType}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={onValueChange}
        />
      </div>
      <div className={`warnContainer`}>
        {hasValidationMessage && (
          <span className='validationMessage'>{validationString}</span>
        )}
      </div>
    </div>
  );
}

interface PublicInputProps {
  iconUrl: string;
  inputType: HTMLInputTypeAttribute;
  inputPlaceholder?: string;
  inputValue?: string;
  hasValidationMessage?: boolean;
  validationString?: string;
  onValueChange?: (obj: any) => any;
}
