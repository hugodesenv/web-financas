// Tela circulada pelo forwardRef pra podermos utilizar por referencia alguns evnetos
// diretamente na classe pai. Expomos esses eventos no hook useImperativeHandle
// Observação: Hoje dia 20/11/2024 o Brasil empatou com o Uruguai por 1x1
// e outra coisa... Eu estou anotando isso hoje devido meu nivel de programação, futuramente remover
// todos esse comentarios de iniciante.

"use client";

import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { MESSAGES } from "@/lib/libConstants";
import { IPersonDto } from "@/lib/libTypes";
import { forwardRef, useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const PersonFormRegister = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      clearForm
    }
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors
    }
  } = useForm<IPersonDto>();

  const onSubmit: SubmitHandler<IPersonDto> = (data) => {
  }

  const clearForm = () => reset();

  return (
    <MyForm onSubmit={handleSubmit(onSubmit)} id="fixed-person-register">
      <MyInputText
        title="Nome"
        {...register('name', { required: MESSAGES.required_field })}
        errorText={errors?.name?.message}
      />
      <MyInputText
        title="Apelido"
        {...register('nickname')}
        errorText={errors?.nickname?.message}
      />
    </MyForm>
  );
})

export default PersonFormRegister;