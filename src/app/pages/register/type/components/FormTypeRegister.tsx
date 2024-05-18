"use client";

import MyForm from "@/components/form/MyForm";
import LayoutButtonsRegister, {
  OptionType,
} from "@/components/layout/layout_buttons_register";
import MyInputText from "@/components/text/MyInputText";
import axiosInstance from "@/config/axios.config";
import { useState } from "react";
import { useForm } from "react-hook-form";

async function uploadData(pData: any) {
  try {
    const res = await axiosInstance.post('/type', pData);
    console.log(res);
    return {
      error: false,
      message: 'Registro incluso com sucesso!',
    };
  } catch (e: any) {
    return { error: true, ...JSON.parse(e.request.response) };
  }
}

function FormTypeRegister() {
  const { handleSubmit, register } = useForm();
  const [isLoading, setLoading] = useState(false);

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const uploaded = await uploadData(data);
      console.log(uploaded);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyForm name="type_register" onSubmit={handleSubmit(onSubmit)}>
      <MyInputText autoFocus title="Descrição" {...register("description")} />
      <LayoutButtonsRegister
        isLoading={isLoading}
        formName="type_register"
        typesAccept={[
          OptionType.SAVE,
          OptionType.DELETE,
          OptionType.CANCEL
        ]}
        onClick={(type: OptionType) => console.log(type)}
      />
    </MyForm>
  );
}

export default FormTypeRegister;
