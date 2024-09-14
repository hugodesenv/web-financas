"use client";

import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";

export default function PersonFormRegister() {
  return (
    <MyForm name="fixed-person-register">
      <MyInputText title="Nome" />
      <MyInputText title="Apelido" />
    </MyForm>
  );
}
