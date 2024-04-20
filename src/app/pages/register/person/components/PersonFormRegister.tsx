"use client";

import MyForm from "@/components/form/MyForm";
import LayoutButtonsRegister, {
  OptionType,
} from "@/components/layout/layout_buttons_register";
import MyInputText from "@/components/text/MyInputText";

export default function PersonFormRegister() {
  return (
    <MyForm name="fixed-person-register">
      <MyInputText title="Nome" />
      <MyInputText title="Apelido" />
      <LayoutButtonsRegister
        formName="fixed_release_register"
        typesAccept={[OptionType.SAVE, OptionType.DELETE, OptionType.CANCEL]}
        onClick={(type: OptionType) => console.log("clicou no botao " + type)}
      />
    </MyForm>
  );
}
