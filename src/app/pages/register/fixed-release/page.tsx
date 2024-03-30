/** 
 * Data: 30/03/2024 16h32
 * Autor: Hugo Souza
 * Página para cadastro dos lançamentos fixos.
 */

import MyButton from "@/components/button/MyButton";
import MyInputText from "@/components/text/MyInputText";

export default function FixedRelease() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <MyInputText title="Descrição" />
      <MyButton>Gravar</MyButton>
    </div>
  )
}