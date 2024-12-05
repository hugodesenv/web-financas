'use client'

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyLayout from "@/components/layout/MyLayout";
import LayoutTopBar from "@/components/layout/layout_topbar";
import MyTabView from "@/components/table/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import { useRef } from "react";
import CategorySearch from "./components/CategorySearch";

export default function Category() {
  const formSearchRef = useRef(null as any);

  // Componente dos botões principais do formulário
  const FormButton = (
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

  return (
    <MyLayout>
      <LayoutTopBar title="Categoria" childrenBefore={FormButton}>
        <MyTabView titles={[{ caption: 'Consulta' }, { caption: 'Digitação' }]}>
          <CategorySearch ref={formSearchRef} />
          <div>Criar aba de cadastro aqui</div>
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  )
}