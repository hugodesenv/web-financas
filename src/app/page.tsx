'use client';

import MyAlert, { IMyAlertState } from '@/components/alert/MyAlert';
import { useMyAlert } from '@/components/alert/hook';
import MyButton from '@/components/button/myButton/MyButton';
import MyInputText from '@/components/text/MyInputText';
import { saveSession } from '@/lib/sessionLib';
import { tryLogin } from '@/service/userSrv';
import { EnRoute } from '@/types/routeType';
import { ILoginDto } from '@/types/userType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import './style.css';
import iconSkedol from '../../public/vercel.svg'

export default function Login() {
  const router = useRouter();
  const { alertState, setAlertState } = useMyAlert();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm<ILoginDto>();

  /** evento de logar no sistema */
  const onSubmit: SubmitHandler<ILoginDto> = async (data) => {
    const { success, message } = await tryLogin(data);

    if (!success) {
      setAlertState({
        visible: true,
        message: 'Credenciais inválidas, verifique.',
        state: IMyAlertState.NORMAL
      });

      return;
    }

    await saveSession(message);
    router.push(EnRoute.HOME.toString());
  }

  return (
    <>
      <div className='login-wrapper'>
        <div className='login-form'>
          <Image className='icon-skedol' src={iconSkedol} alt='Logo' width={0} height={0} />
          <form id='loginform' onSubmit={handleSubmit(onSubmit)}>
            <div className='login-form-fields login-gap'>
              <MyInputText
                disabled={isSubmitting}
                {...register('email', { required: 'O e-mail é obrigatório' })}
                autoFocus
                title='E-mail'
                type='email'
                errorText={errors.email?.message}
              />
              <MyInputText
                disabled={isSubmitting}
                {...register('password', { required: 'Sua senha é obrigatória' })}
                title='Senha'
                type='password'
                errorText={errors.password?.message}
                autoComplete='on'
              />
            </div>
          </form>
          <div className='login-button-wrapper login-gap'>
            <MyButton type='submit' form='loginform' >Acessar</MyButton>
            <MyButton >Esqueci a senha</MyButton>
          </div>
        </div>
        <div className='login-information' />
      </div>
      <MyAlert message={alertState?.message} state={alertState?.state} visible={alertState?.visible} />
    </>
  )
}