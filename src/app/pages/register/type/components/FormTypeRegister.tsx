"use client";

import MyForm from "@/components/form/MyForm";
import LayoutButtonsRegister, {
  OptionType,
} from "@/components/layout/layout_buttons_register";
import MyInputText from "@/components/text/MyInputText";
import { useForm } from "react-hook-form";

function FormTypeRegister() {
  const { handleSubmit, register } = useForm();

  function onSubmit(data: any) {}

  return (
    <MyForm name="type_register" onSubmit={handleSubmit(onSubmit)}>
      <MyInputText autoFocus title="Descrição" {...register("description")} />
      <LayoutButtonsRegister
        formName="type_register"
        typesAccept={[OptionType.SAVE, OptionType.DELETE, OptionType.CANCEL]}
        onClick={(type: OptionType) => console.log(type)}
      />
    </MyForm>
  );
}

export default FormTypeRegister;
