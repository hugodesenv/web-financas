'use client';

import MyAlert from '@/components/alert/MyAlert';
import { useMyAlert } from '@/components/alert/hook';
import MyButton from '@/components/button/myButton/MyButton';
import MyInputText from '@/components/text/MyInputText';
import { TLoginDTO } from '@/features/account/accountTypes';
import { authenticationCase } from '@/features/account/useCase/authenticationCase';
import { MESSAGES } from '@/utils/constantsUtils';
import { EnRoute } from '@/utils/commomTypes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import iconSkedol from '../../public/vercel.svg';
import './style.css';

export default function Login() {
  const router = useRouter();
  const { alertState, setAlertState } = useMyAlert();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginDTO>();

  /** evento de logar no sistema */
  const onSubmit: SubmitHandler<TLoginDTO> = async (data: TLoginDTO) => {
    const { success, message } = await authenticationCase(data);

    if (!success) {
      setAlertState({ message, key: Date.now(), color: 'red' });
      return;
    }

    setAlertState({ message, key: Date.now(), color: 'blue' });
    router.push(EnRoute.HOME.toString());
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-form">
          <Image className="icon-skedol" src={iconSkedol} alt="Logo" width={0} height={0} />
          <form id="loginform" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-fields login-gap">
              <MyInputText
                disabled={isSubmitting}
                {...register('username', { required: MESSAGES.required_field })}
                autoFocus
                title="Usuário"
                errorText={errors.username?.message}
              />
              <MyInputText
                disabled={isSubmitting}
                {...register('password', { required: MESSAGES.required_field })}
                title="Senha"
                type="password"
                errorText={errors.password?.message}
                autoComplete="on"
              />
            </div>
          </form>
          <div className="login-button-wrapper login-gap">
            <MyButton type="submit" form="loginform" isloading={isSubmitting}>
              Acessar
            </MyButton>
            <MyButton isloading={isSubmitting}>Esqueci a senha</MyButton>
          </div>
        </div>
        <div className="login-information" />
      </div>
      <MyAlert {...alertState} />
    </>
  );
}
