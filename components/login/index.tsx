import Image from 'next/image';

import PublicInput from '../public-input';

import Link from 'next/link';
import { useState } from 'react';

import PrimaryButton from '../primary-button';

import envelope from '../../public/icons/envelope.svg';
import key from '../../public/icons/key.svg';
import cinema from '../../public/images/Movie-Logo-Cinema-PNG.png';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <section className={`loginPage publicPage`}>
      <div className={`logoContainer`}>
        <Image src={cinema} alt='Logo' fill={true} />
      </div>

      <div className={`formContainer`}>
        <form action=''>
          <PublicInput
            inputType='e-mail'
            iconUrl={envelope}
            inputPlaceholder='E-mail'
            onValueChange={(e) => setEmail(e?.target.value)}
            inputValue={email}
          />

          <PublicInput
            inputType='password'
            iconUrl={key}
            inputPlaceholder='Password'
            onValueChange={(e) => setPassword(e?.target.value)}
            inputValue={password}
          />

          <PrimaryButton text='Login' type='submit' isDisabled={false} />
        </form>

        <div className='formBottomInfo'>
          <p>Don't have an account?</p>
          <Link href='/register'>Register now!</Link>
        </div>
      </div>
    </section>
  );
}
