'use client';

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyLayout from "@/components/layout/MyLayout";
import LayoutTopBar from "@/components/layout/layout_topbar";
import MyTabView, { ITitle } from "@/components/table/tabview/MyTabView";
import MyStack from "@/components/utils/MyHorizontalStack";
import { TBankAccount, TBankAccountDefaultValues } from "@/features/bankAccount/bankAccountTypes";
import { useRef } from "react";
import BankAccountRegister from "./components/BankAccountRegister";
import BankAccountSearch from "./components/BankAccountSearch";
import { useBankAccount } from "@/features/bankAccount/useCaseBankAccount";

const titleTab = [
  { caption: 'Consulta' },
  { caption: 'Digitação' }
] as ITitle[];

export default function BankAccount() {
  const { findByID } = useBankAccount();

  // ref to control the components
  const formSearchRef = useRef(null as any);
  const formRef = useRef(null as any);
  const formTab = useRef(null as any);

  // main buttons from form
  const buttons = (
    <MyStack>
      <MyIconButton
        text="Novo"
        iconType={EnIconButtonType.NEW}
        onClick={() => formRef.current.populateForm(TBankAccountDefaultValues)}
      />
      <MyIconButton
        text="Consultar"
        iconType={EnIconButtonType.SEARCH}
        onClick={() => formSearchRef.current.onSearch()}
      />
    </MyStack>
  );

  // loading single bank account
  async function loadbyID(id: number) {
    const { data } = await findByID(id);
    formRef.current.populateForm(data);
    formTab.current.setCurrentIndex(1);
  }

  return <>
    <MyLayout>
      <LayoutTopBar title="Conta bancária" childrenBefore={buttons}>
        <MyTabView titles={titleTab} ref={formTab}>
          <BankAccountSearch
            ref={formSearchRef}
            onSelect={async ({ id }: TBankAccount) => id && await loadbyID(id)}
          />
          <BankAccountRegister ref={formRef} />
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  </>
}