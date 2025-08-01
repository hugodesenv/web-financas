import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { TBankAccount, TBankAccountDefaultValues } from "@/features/bankAccount/bankAccountTypes";
import { useBankAccount } from "@/features/bankAccount/useCaseBankAccount";
import { message } from "antd";
import { forwardRef, useImperativeHandle } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";

const BankAccountRegister = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      populateForm
    };
  });

  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, register, reset } = useForm();
  const { createAccount, updateAccount } = useBankAccount();

  const onValid = async (data: FieldValues) => {
    let payload: TBankAccount = {
      description: data.description
    };

    if (!data?.id) {
      var { success } = await createAccount(payload);
    } else {
      var { success } = await updateAccount(payload, data.id);
    }

    if (!success) {
      messageApi.open({ content: "Houve uma falha na operação. Verifique ou tente novamente!", type: "error" });
      return;
    }

    messageApi.open({ content: "Processo realizado com sucesso", type: "success" });
    populateForm(TBankAccountDefaultValues)
  }

  const populateForm = (bankAccount: TBankAccount) => {
    reset(bankAccount);
  };

  return <>
    {contextHolder}
    <MyForm id="bank-account-register" onSubmit={handleSubmit(onValid)}>
      <MyInputText
        title="Descrição"
        required
        {...register('description')}
      />
      <MyFloattingButton
        attributes={{ type: 'submit' }}
        icon={<FaRegSave size={18} />}
      />
    </MyForm>
  </>
});

export default BankAccountRegister;