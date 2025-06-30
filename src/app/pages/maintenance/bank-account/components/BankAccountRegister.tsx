import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { TBankAccount } from "@/type/bankAccountTypes";
import { createBankAccountUse } from "@/use/bankAccount/create";
import { message } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";

export function BankAccountRegister() {
  const { handleSubmit, register, reset } = useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onValid = async (data: FieldValues) => {
    const payload: TBankAccount = {
      description: data.description
    };

    const { success } = await createBankAccountUse(payload);

    if (!success) {
      messageApi.open({ content: "Não foi possível incluir a conta bancária", type: "error" });
      return;
    }

    messageApi.open({ content: "Cadastro realizado com sucesso", type: "success" });
    reset();
  }

  return <>
    {contextHolder}
    <MyForm id="bank-account-register" onSubmit={handleSubmit(onValid)}>
      <MyInputText
        title="Descrição"
        {...register('description')}
        required
      />
      <MyFloattingButton
        attributes={{ type: 'submit' }}
        icon={<FaRegSave size={18} />}
      />
    </MyForm>
  </>
}