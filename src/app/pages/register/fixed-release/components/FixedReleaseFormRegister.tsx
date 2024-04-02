'use client';

import MyButton from "@/components/button/MyButton";
import MyInputText from "@/components/text/MyInputText";
import { MyTabView } from "@/components/utils/tabview/MyTabView";
import { CSSProperties } from "react";
import { useForm } from "react-hook-form";

const style = {
  main: { display: 'flex', flexDirection: 'column', gap: 10 } as CSSProperties,
}

export default function FixedReleaseFormRegister() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data: any) {
    // Lógica para salvar os dados
    console.log('Dados', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={style.main}>
      <MyInputText
        title="Descrição"
        {...register('description')}
      />
      <MyInputText
        title="Data de previsão"
        type="date"
        {...register('expected_date')}
      />
      <MyTabView />
      <MyButton type="submit">Gravar</MyButton>
    </form>
  );
}