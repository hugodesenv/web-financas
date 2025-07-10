import MyAlert from "@/components/alert/MyAlert";
import { useMyAlert } from "@/components/alert/hook";
import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { TPurpose, TPurposeDefaultValue } from "@/features/purpose/purposeTypes";
import { createPurposeUseCase } from "@/features/purpose/useCase/createPurposeCase";
import { updatePurposeUseCase } from "@/features/purpose/useCase/updatePurposeCase";
import { MESSAGES } from "@/utils/constantsUtils";
import { IHTTPResponse } from "@/utils/commomTypes";
import { forwardRef, useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";

export const PurposeFormRegister = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      populateForm
    };
  });

  const { handleSubmit, register, reset } = useForm<TPurpose>({
    defaultValues: TPurposeDefaultValue
  });

  const { alertState, setAlertState } = useMyAlert();

  const populateForm = (purpose: TPurpose) => reset(purpose);

  const _onSubmit: SubmitHandler<TPurpose> = async (data) => {
    let response: IHTTPResponse = { success: false };

    if (data.id && data.id > 0) {
      response = await updatePurposeUseCase(data);
    } else {
      response.success = await createPurposeUseCase(data);
    }

    if (!response.success) {
      setAlertState({ message: response.message ?? MESSAGES.fail_record, key: Date.now() });
      return;
    }

    setAlertState({ message: MESSAGES.operation_successfully, key: Date.now() });
    populateForm(TPurposeDefaultValue);
  }

  return <>
    <MyForm
      id="fixed-person-register"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <MyInputText title="ID" hidden {...register("id")} />
      <MyInputText title="Descrição" {...register('description')} />
      <MyFloattingButton
        attributes={{ type: 'submit' }}
        icon={<FaRegSave size={18} />}
      />
    </MyForm>
    <MyAlert {...alertState} />
  </>
});