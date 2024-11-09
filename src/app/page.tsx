import MyButton from '@/components/button/myButton/MyButton';
import './style.css';
import MyInputText from '@/components/text/MyInputText';
import Image from 'next/image'

export default function Login() {
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
        <div className='login-form-fields login-gap'>
          <MyInputText autoFocus title='Usuário' />
          <MyInputText title='Senha' type='password' />
        </div>
        <div className='login-button-wrapper login-gap'>
          <MyButton>Acessar</MyButton>
          <MyButton>Registrar</MyButton>
        </div>
      </div>
      <div className='login-information' />
    </div>
  )
}