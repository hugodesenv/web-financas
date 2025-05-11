import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { TPurpose } from "@/type/purposeTypes";
import { forwardRef, useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";

export const PurposeFormRegister = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      populateForm
    };
  });

  const {
    handleSubmit,
    register,
    reset
  } = useForm<TPurpose>();

  const populateForm = (purpose: TPurpose) => reset(purpose);

  const _onSubmit: SubmitHandler<TPurpose> = async (data) => {

  }

  return <MyForm onSubmit={handleSubmit(_onSubmit)} id="fixed-person-register">
    <MyInputText title="ID" hidden {...register("id")} />
    <MyInputText title="Descrição" {...register('description')} />
    <MyFloattingButton attributes={{ type: 'submit' }} icon={<FaRegSave size={18} />} />
  </MyForm>
});

Fazer esquema de updates