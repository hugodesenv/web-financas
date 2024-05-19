"use client";

import MyForm from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import axiosInstance from "@/config/axios.config";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface IProps { data: any };

export const defaultCurrentType = {
  description: '',
  id: 0,
};

/**
 * Enviamos os dados do tipo paa gravar no banco de dados.
 * @param pData 
 * @returns 
 */
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

function FormTypeRegister(props: IProps) {
  const { handleSubmit, register, reset } = useForm();
  const formRegisterRef = useRef<HTMLFormElement>();
  const [loading, setLoading] = useState(false);

  useEffect(() => reset(props.data), [props.data]);

  //==> Tratamos a gravação do registro.
  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const uploaded = await uploadData(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyForm onSubmit={handleSubmit(onSubmit)}>
      <MyInputText
        autoFocus
        title="Descrição" {...register("description")}
      />
    </MyForm>
  );
}

export default FormTypeRegister;
