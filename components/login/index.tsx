import Image from 'next/image';

import PublicInput from '../public-input';

import Link from 'next/link';
import { useState } from 'react';

import PrimaryButton from '../primary-button';
import { validateEmail } from '../../utils/validators';

import envelope from '../../public/icons/envelope.svg';
import key from '../../public/icons/key.svg';
import logo from '../../public/images/logo_svg.svg';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const isFormValid = () => {
    return !validateEmail(email);
  };

  return (
    <section className={`loginPage publicPage`}>
      <div className={`logoContainer`}>
        <Image src={logo} alt='Logo' fill={true} className='logo' />
      </div>

      <div className={`formContainer`}>
        <form action=''>
          <PublicInput
            inputType='email'
            iconUrl={envelope}
            inputPlaceholder='E-mail'
            onValueChange={(e) => setEmail(e?.target.value)}
            inputValue={email}
            hasValidationMessage={!!email && !validateEmail(email)}
            validationString='Invalid email.'
          />

          <PublicInput
            inputType='password'
            iconUrl={key}
            inputPlaceholder='Password'
            onValueChange={(e) => setPassword(e?.target.value)}
            inputValue={password}
          />

          <PrimaryButton
            text='Login'
            type='submit'
            isDisabled={isFormValid()}
          />
        </form>

        <div className='formBottomInfo'>
          <p>Don't have an account?</p>
          <Link href='/registration'>Register now!</Link>
        </div>
      </div>
    </section>
  );
}
