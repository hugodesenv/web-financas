"use client";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import axiosInstance from "@/lib/lib.axios";
import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";

// Tipagem das propriedades do componente
interface IProps {
  data: any;
  state: (isLoading: boolean) => void;
}

// Tipagem das funções que serão exportadas para o pai com base no Ref.
export interface IExposeTypeFunctions {
  requestSubmit: () => void;
};

export const defaultCurrentType = {
  description: '',
  id: 0,
};

/**
 * Transmite os dados do tipo para a api
 * @param pData objeto do tipo
 * @returns se deu certo ou não a transmissão
 */
async function uploadDataToAPI(pData: any) {
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

// Função que será exportada
const FormTypeRegister = React.forwardRef((props: IProps, ref: any) => {
  const { handleSubmit, register, reset } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  // hook do react para exportar as funções pro componente pai
  useImperativeHandle(ref, () => ({
    requestSubmit: () => {
      formRef?.current?.requestSubmit();
    }
  }));

  // hook do react para setar os dados do tipo
  useEffect(() => {
    reset(props?.data)
  }, [props.data]);

  /**
   * Evento de submissão do formulário de cadastro
   * @param data objeto de tipos
   */
  async function onSubmitted(data: any) {
    props.state(true);
    try {
      await uploadDataToAPI(data);
    } finally {
      props.state(false);
    }
  }

  return (
    <MyForm ref={formRef} onSubmit={handleSubmit(onSubmitted)} >
      <MyInputText
        autoFocus
        title="Descrição"
        {...register("description")}
      />
    </MyForm>
  );
});

export default FormTypeRegister;
