'use client';

import MyButton from "@/components/button/MyButton";
import MyInputText from "@/components/text/MyInputText";
import { CSSProperties } from "react";

const style = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  } as CSSProperties,
}

export default function FixedReleaseFormRegister() {
  function handleSave(event: any) {
    // Lógica para salvar os dados
    console.log('Dados salvos!');
  }

  return (
    <div style={style.main}>
      <MyInputText title="Descrição" />
      <MyInputText title="Data de previsão" type="date" />
      <MyButton onClick={handleSave}>Gravar</MyButton>
    </div >
  );
}