"use client";

import MyForm from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import axiosInstance from "@/config/axios.config";
import { useState } from "react";
import { useForm } from "react-hook-form";

async function uploadData(pData: any) {
  try {
    const res = await axiosInstance.post('/type', pData);
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
  const [loading, setLoading] = useState(false);
  const [disableFields, setDisableFields] = useState(true);

  async function onSubmit(data: any) {
    setLoading(true);
    setDisableFields(true);
    try {
      const uploaded = await uploadData(data);
      console.log(uploaded);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyForm name="type_register" onSubmit={handleSubmit(onSubmit)}>
      <MyInputText
        disabled={disableFields}
        autoFocus
        title="Descrição" {...register("description")}
      />
    </MyForm>
  );
}

export default FormTypeRegister;
