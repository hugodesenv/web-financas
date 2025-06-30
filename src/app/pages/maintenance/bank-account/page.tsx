'use client';

import MyLayout from "@/components/layout/MyLayout";
import LayoutTopBar from "@/components/layout/layout_topbar";
import MyTabView, { ITitle } from "@/components/table/tabview/MyTabView";
import BankAccountSearch from "./components/BankAccountSearch";
import { useRef } from "react";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import { BankAccountRegister } from "./components/BankAccountRegister";

const titleTab = [
  { caption: 'Consulta' },
  { caption: 'Digitação' }
] as ITitle[];

export default function BankAccount() {
  const formSearchRef = useRef(null as any);
  const buttons = (
    <MyHorizontalStack>
      <MyIconButton
        text="Novo"
        iconType={EnIconButtonType.NEW}
        onClick={() => { }}
      />
      <MyIconButton
        text="Consultar"
        iconType={EnIconButtonType.SEARCH}
        onClick={() => formSearchRef.current.onSearch()}
      />
    </MyHorizontalStack>
  );

  return <>
    <MyLayout>
      <LayoutTopBar title="Conta bancária" childrenBefore={buttons}>
        <MyTabView titles={titleTab}>
          <BankAccountSearch ref={formSearchRef} />
          <BankAccountRegister />
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  </>
}