"use client";

import MyButton from "@/components/button/MyButton";
import LayoutRegister from "@/components/layout/layout_topbar";
import MyTable, { IMyTableDataSource } from "@/components/table/MyTable";
import { MyTabView } from "@/components/tabview/MyTabView";
import { useState } from "react";
import FormTypeRegister from "./components/FormTypeRegister";
import axiosInstance from "@/config/axios.config";

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
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetch() {
    setIsLoading(true);
    try {
      const types = await fetch();
      setQueryRecord(types);
    } finally {
      setIsLoading(false);
    }
  }

  function TabSearch() {
    return (
      <div>
        <MyButton onClick={handleFetch} isLoading={isLoading}>Consultar</MyButton>
        <MyTable
          columns={[
            { key: "ID", label: "Código", style: { width: "10%" } },
            { key: "description", label: "Descrição" },
          ]}
          datasource={queryRecord}
        />
      </div >
    );
  }

  return (
    <LayoutRegister title="Tipos">
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <TabSearch />
        <FormTypeRegister />
      </MyTabView>
    </LayoutRegister>
  );
}
