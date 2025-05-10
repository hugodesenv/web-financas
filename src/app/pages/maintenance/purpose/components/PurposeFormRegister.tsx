import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { TPurpose } from "@/type/purposeTypes";
import { forwardRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";

export const PurposeFormRegister = forwardRef((props, ref) => {
  const {
    handleSubmit,
    register
  } = useForm<TPurpose>();

  const _onSubmit: SubmitHandler<TPurpose> = async (data) => {
  }

  return <MyForm onSubmit={handleSubmit(_onSubmit)} id="fixed-person-register">
    <MyInputText title="ID" hidden {...register("id")} />
    <MyInputText title="Descrição" {...register('description')} />
    <MyFloattingButton attributes={{ type: 'submit' }} icon={<FaRegSave size={18} />} />
  </MyForm>
})

Finalizar esse cadastro.