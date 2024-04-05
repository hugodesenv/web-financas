'use client';

import MyButton from "@/components/button/MyButton";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyInputText from "@/components/text/MyInputText";
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

  function SearchTab() {
    return <>
      Tela de consulta aqui
    </>
  }

  function RegisterTab() {
    return <form onSubmit={handleSubmit(onSubmit)} style={style.main}>
      <MyInputText
        title="Descrição"
        {...register('description')}
      />
      <MyInputText
        title="Data de previsão"
        type="date"
        {...register('expected_date')}
      />

      <MyButton type="submit">Gravar</MyButton>
    </form>
  }

  return (
    <MyTabView
      titles={['Consulta', 'Digitação']}
      children={[
        <SearchTab />,
        <RegisterTab />,
      ]}
    />
  );
}