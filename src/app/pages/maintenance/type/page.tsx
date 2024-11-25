"use client";

import MyAlert from "@/components/alert/MyAlert";
import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import LayoutRegister from "@/components/layout/layout_topbar";
import MyTable, { IMyTableWrapper } from "@/components/table/MyTable";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import axiosInstance from "@/lib/lib.axios";
import { useRef, useState } from "react";
import FormTypeRegister, { IExposeTypeFunctions, defaultCurrentType } from "./components/FormTypeRegister";
import MyTabView from "@/components/table/tabview/MyTabView";

/**
 * Busca os dados na API 
 * @param typeObject objeto do tipo selecionado
 * @returns um unico objeto de tipo contendo todas as suas caracteristicas
 */
async function fetchByID(typeObject: any) {
  try {
    const { data } = await axiosInstance.get('/type/findone', { params: { id: typeObject.id } });
    return data.data;
  } catch (e) {
    return {};
  }
}

// Componente de tela
export default function TypeRegister() {
  const [currentType, setCurrentType] = useState({});
  const [loading, setLoading] = useState(false);
  const [queryRecord, setQueryRecord] = useState([] as IMyTableWrapper[]);
  const formRegisterRef = useRef<IExposeTypeFunctions>();

  /**
   * Ação do botão "Pesuisar"
   * @param event evento do padrao botao
   */
  async function handleFetch(event: any) {
    event.preventDefault();
  };

  // Ação ao clicar em "Novo"
  async function handleNewType() {
    setCurrentType(defaultCurrentType);
  }

  /**
   * Evento ao clicar na linha do grid de consulta
   * @param typeObject objeto do tipo selecionado
   */
  async function handleRowClick(typeObject: any) {
    setLoading(true);
    try {
      const objectSelected = await fetchByID(typeObject);
      setCurrentType(objectSelected);
    } finally {
      setLoading(false);
    }
  };

  // Componente da aba consulta.
  function TabSearch() {
    return (
      <MyTable
        columns={[
          { key: "ID", label: "Código", style: { width: "10%" } },
          { key: "description", label: "Descrição" },
        ]}
        datasource={queryRecord}
        onRowClick={handleRowClick}
      />
    );
  };

  // Ação ao clicar no botão gravar
  function handleSave(event: any) {
    formRegisterRef.current?.requestSubmit();
  }

  // Botoes localizados no topo para manipulação da tela. (Alterar, incluir etc.)
  const ActionsButtons = (
    <MyHorizontalStack>
      <MyIconButton
        onClick={handleFetch}
        iconType={EnIconButtonType.SEARCH}
        isLoading={loading}
      />
      <MyIconButton
        onClick={() => handleNewType()}
        iconType={EnIconButtonType.NEW}
      />
      <MyIconButton
        onClick={handleSave}
        iconType={EnIconButtonType.SAVE}
        isLoading={loading}
      />
    </MyHorizontalStack>
  );

  return (
    <LayoutRegister title="Tipos" childrenBefore={ActionsButtons}>
      <MyAlert
        message="Teste do meu layout customizado lindão"
      />
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <TabSearch />
        <FormTypeRegister
          ref={formRegisterRef}
          data={currentType}
          state={setLoading}
        />
      </MyTabView>
    </LayoutRegister>
  );
}
