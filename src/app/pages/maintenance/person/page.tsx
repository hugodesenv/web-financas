'use client'

import MyLayout from "@/components/layout/MyLayout";
import LayoutRegister from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import PersonFormRegister from "./components/PersonFormRegister";
import PersonSearch from "./components/PersonSearch";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import { useRef } from "react";

export default function Person() {
  const formRef = useRef(null as any); // para manipulacao do formulario de cadastro.

  const action_buttons = (
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
    </MyHorizontalStack>
  );

  return (
    <MyLayout>
      <LayoutRegister title="Pessoas" childrenBefore={action_buttons}>
        <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
          <PersonSearch />
          <PersonFormRegister ref={formRef} />
        </MyTabView>
      </LayoutRegister>
    </MyLayout>
  );
}
