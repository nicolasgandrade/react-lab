import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PublicInput from '../../components/public-input';
import PrimaryButton from '../../components/primary-button';

import { ImageUpload } from '../../components/image-upload';

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
          />
          <PublicInput
            iconUrl={envelope}
            inputType={'email'}
            inputPlaceholder='E-mail'
            onValueChange={(e) => setEmail(e.target.value)}
            inputValue={email}
          />
          <PublicInput
            iconUrl={key}
            inputType={'password'}
            inputPlaceholder='Password'
            onValueChange={(e) => setPassword(e.target.value)}
            inputValue={password}
          />
          <PublicInput
            iconUrl={key}
            inputType={'password'}
            inputPlaceholder='Password confirmation'
            onValueChange={(e) => setPasswordConfirm(e.target.value)}
            inputValue={passwordConfirm}
          />

          <PrimaryButton
            text={'Create account'}
            type={'submit'}
            isDisabled={false}
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
