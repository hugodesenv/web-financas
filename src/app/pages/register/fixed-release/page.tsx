/** 
 * Data: 30/03/2024 16h32
 * Autor: Hugo Souza
 * Página para cadastro dos lançamentos fixos.
 */

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

export default function FixedRelease() {
  return (
    <div style={style.main}>
      <MyInputText title="Descrição" />
      <MyButton onClick={() => { }}>Gravar</MyButton>
    </div >
  )
}