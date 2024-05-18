"use client";

import MyButton from "@/components/button/myButton/MyButton";
import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import LayoutRegister from "@/components/layout/layout_topbar";
import MyTable, { IMyTableDataSource } from "@/components/table/MyTable";
import { MyTabView } from "@/components/tabview/MyTabView";
import axiosInstance from "@/config/axios.config";
import { useState } from "react";
import { MdLineWeight } from "react-icons/md";
import FormTypeRegister from "./components/FormTypeRegister";

/**
 * Buscamos os tipos na API, e com o resultado, tratamos ele para ficar no formato suportado
 * pelo grid.
 * @returns 
 */
async function fetch() {
  try {
    const query = await axiosInstance.get('/type');
    const { data } = query;

    const objectType = data.map((typeObject: any) => {
      return [
        { text: typeObject.id },
        { text: typeObject.description }
      ] as IMyTableDataSource[];
    });

    return objectType;
  } catch (e) {
    return [];
  }
}

export default function TypeRegister() {
  const [queryRecord, setQueryRecord] = useState([] as IMyTableDataSource[][]);
  const [loading, setLoading] = useState(false);

  async function handleFetch() {
    setLoading(true);
    try {
      const types = await fetch();
      setQueryRecord(types);
    } finally {
      setLoading(false);
    }
  }

  function TabSearch() {
    return <MyTable
      columns={[
        { key: "ID", label: "Código", style: { width: "10%" } },
        { key: "description", label: "Descrição" },
      ]}
      datasource={queryRecord}
    />;
  };

  // Lista de botõe que passamos pro nosso LayoutRegister, responsável por redenrizar o floatting action button.
  const optionsFloatting = [
    <MyButton>Incluir</MyButton>,
    <MyButton>Alterar</MyButton>,
    <MyButton>Excluir</MyButton>,
    <MyButton onClick={handleFetch} isLoading={loading}>Pesquisar</MyButton>,
  ];

  return (
    <LayoutRegister title="Tipos" optionsFloatting={optionsFloatting}>
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <TabSearch />
        <FormTypeRegister />
      </MyTabView>
    </LayoutRegister>
  );
}
