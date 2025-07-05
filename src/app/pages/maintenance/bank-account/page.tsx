'use client';

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyLayout from "@/components/layout/MyLayout";
import LayoutTopBar from "@/components/layout/layout_topbar";
import MyTabView, { ITitle } from "@/components/table/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import { TBankAccount, TBankAccountDefaultValues } from "@/type/bankAccountTypes";
import { findByIDBankAccountUse } from "@/use/bankAccount/findByID";
import { useRef } from "react";
import BankAccountRegister from "./components/BankAccountRegister";
import BankAccountSearch from "./components/BankAccountSearch";

const titleTab = [
  { caption: 'Consulta' },
  { caption: 'Digitação' }
] as ITitle[];

export default function BankAccount() {
  // ref to control the components
  const formSearchRef = useRef(null as any);
  const formRef = useRef(null as any);
  const formTab = useRef(null as any);

  // main buttons from form
  const buttons = (
    <MyHorizontalStack>
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
    </MyHorizontalStack>
  );

  // loading single bank account
  async function loadbyID(id: number) {
    const { data } = await findByIDBankAccountUse(id); 
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