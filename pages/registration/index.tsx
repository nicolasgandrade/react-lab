import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PublicInput from '../../components/public-input';
import PrimaryButton from '../../components/primary-button';

import { ImageUpload } from '../../components/image-upload';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirm,
} from '../../utils/validators';

import user from '../../public/icons/user.svg';
import envelope from '../../public/icons/envelope.svg';
import key from '../../public/icons/key.svg';
import logo from '../../public/images/logo_svg.svg';
import defaultUserImage from '../../public/images/default-user-image.png';

export default function Registration() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [image, setImage] = useState<any>(null);

  const isFormValid = () => {
    return !(
      validateName(name) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validatePasswordConfirm(passwordConfirm, password)
    );
  };

  return (
    <section className='registrationPage publicPage'>
      <div className='logoContainer onlyDesktop'>
        <Image src={logo} alt='Logo' fill={true} className='logo' />
      </div>

      <div className='formContainer'>
        <form>
          <ImageUpload
            imagePreviewClassName='avatar avatarPreview'
            setImage={setImage}
            imagePreviewUrl={image?.preview || defaultUserImage.src}
          />

          <PublicInput
            iconUrl={user}
            inputType={'text'}
            inputPlaceholder='Full name'
            onValueChange={(e) => setName(e.target.value)}
            inputValue={name}
            hasValidationMessage={!!name && !validateName(name)}
            validationString='Your username must have at least 4 characters.'
          />
          <PublicInput
            iconUrl={envelope}
            inputType={'email'}
            inputPlaceholder='E-mail'
            onValueChange={(e) => setEmail(e.target.value)}
            inputValue={email}
            hasValidationMessage={!!email && !validateEmail(email)}
            validationString='Invalid email.'
          />
          <PublicInput
            iconUrl={key}
            inputType={'password'}
            inputPlaceholder='Password'
            onValueChange={(e) => setPassword(e.target.value)}
            inputValue={password}
            hasValidationMessage={!!password && !validatePassword(password)}
            validationString='Your password must have at least 3 characters'
          />
          <PublicInput
            iconUrl={key}
            inputType={'password'}
            inputPlaceholder='Password confirmation'
            onValueChange={(e) => setPasswordConfirm(e.target.value)}
            inputValue={passwordConfirm}
            hasValidationMessage={
              !!passwordConfirm &&
              !validatePasswordConfirm(passwordConfirm, password)
            }
            validationString='Your passwords must match.'
          />

          <PrimaryButton
            text={'Create account'}
            type={'submit'}
            isDisabled={isFormValid()}
          />
        </form>

        <div className='formBottomInfo'>
          <p>Already have an account?</p>
          <Link href='/'>Login now!</Link>
        </div>
      </div>
    </section>
  );
}
