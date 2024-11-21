'use client'

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyLayout from "@/components/layout/MyLayout";
import LayoutRegister from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import { useRef } from "react";
import PersonFormRegister from "./components/PersonFormRegister";
import PersonSearch from "./components/PersonSearch";

export default function Person() {
  const formRef = useRef(null as any); // para manipulacao do formulario de cadastro.
  const buttonRef = useRef(null as any); // para manipulação dos botoes principais da tela

  const MainButtons = (
    <MyHorizontalStack>
      <MyIconButton
        type="submit"
        form="fixed-person-register"
        iconType={EnIconButtonType.SAVE}
        isLoading={false}
      />
      <MyIconButton
        type="button"
        iconType={EnIconButtonType.CLEAR}
        isLoading={false}
        onClick={() => formRef.current.clearForm()}
      />
      <MyIconButton
        iconType={EnIconButtonType.SEARCH}
        isLoading={false}
        onClick={() => buttonRef.current.onSearch()}
      />
      <MyIconButton
        iconType={EnIconButtonType.FILTER}
      />
    </MyHorizontalStack>
  );

  return (
    <MyLayout>
      <LayoutRegister title="Pessoas" childrenBefore={MainButtons}>
        <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
          <PersonSearch ref={buttonRef} />
          <PersonFormRegister ref={formRef} />
        </MyTabView>
      </LayoutRegister>
    </MyLayout>
  );
}
