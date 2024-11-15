'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyInputText from '@/components/text/MyInputText';
import { tryLogin } from '@/service/userSrv';
import Image from 'next/image';
import './style.css';

export default function Login() {
  async function onSubmit(formData: FormData) {
    await tryLogin({
      username: formData.get('username')?.toString() ?? '',
      password: formData.get('password')?.toString() ?? ''
    });
  }

  return (
    <div className='login-wrapper'>
      <div className='login-form'>
        <Image
          className='icon-skedol'
          src={'../../vercel.svg'}
          alt='Logo'
          width={0}
          height={0}
        />
        <form id='loginform' action={onSubmit}>
          <div className='login-form-fields login-gap'>
            <MyInputText name='username' autoFocus title='Usuário' />
            <MyInputText name='password' title='Senha' type='password' />
          </div>
        </form>
        <div className='login-button-wrapper login-gap'>
          <MyButton type='submit' form='loginform'>Acessar</MyButton>
          <MyButton>Esqueci a senha</MyButton>
        </div>
      </div>
      <div className='login-information' />
    </div>
  )
}