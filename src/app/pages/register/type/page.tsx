"use client";

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import LayoutRegister from "@/components/layout/layout_topbar";
import MyTable, { IMyTableDataSource, IMyTableWrapper } from "@/components/table/MyTable";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import axiosInstance from "@/config/axios.config";
import { useState } from "react";
import FormTypeRegister, { defaultCurrentType } from "./components/FormTypeRegister";

//==> Busca os cadastros dos tipos.
async function fetch() {
  try {
    const query = await axiosInstance.get('/type');
    const { data } = query;
    return data;
  } catch (e) {
    return [];
  }
}

//==> Busca o cadastro do tipo pelo ID.
async function fetchByID(typeObject: any) {
  try {
    const { data } = await axiosInstance.get('/type/findone', { params: { id: typeObject.id } });
    return data;
  } catch (e) {
    return {};
  }
}

export default function TypeRegister() {
  const [queryRecord, setQueryRecord] = useState([] as IMyTableWrapper[]);
  const [loading, setLoading] = useState(false);
  const [currentType, setCurrentType] = useState({});

  //==> Evento do botao pesquisar.
  async function handleFetch() {
    setLoading(true);
    try {
      const types = await fetch();
      const objectType = types.map((typeObject: any) => {
        return {
          object: typeObject,
          dataSource: [
            { text: typeObject.id },
            { text: typeObject.description }
          ] as IMyTableDataSource[]
        } as IMyTableWrapper;
      });

      setQueryRecord(objectType);
    } finally {
      setLoading(false);
    }
  };

  //==> Evento de inclusao.
  async function handleNewType() {
    setCurrentType(defaultCurrentType);
  }

  //==> Evento quando clica no grid de consulta
  async function handleRowClick(typeObject: any) {
    setLoading(true);
    try {
      const objectSelected = await fetchByID(typeObject);
      setCurrentType(objectSelected);
    } finally {
      setLoading(false);
    }
  };

  //==> Aba de consulta.
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

  //==> Botoes do formulario de cadastro.
  const ActionsButtons = (
    <MyHorizontalStack>
      <MyIconButton
        onClick={() => handleFetch()}
        iconType={EnIconButtonType.SEARCH}
        isLoading={loading}
      />
      <MyIconButton
        onClick={() => handleNewType()}
        iconType={EnIconButtonType.NEW}
      />
      <MyIconButton
        form="type_register"
        onClick={() => { }}
        iconType={EnIconButtonType.SAVE}
      />
    </MyHorizontalStack>
  );

  return (
    <LayoutRegister
      title="Tipos"
      childrenBefore={ActionsButtons}>
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <TabSearch />
        <FormTypeRegister data={currentType} />
      </MyTabView>
    </LayoutRegister>
  );
}
