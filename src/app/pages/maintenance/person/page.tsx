'use client'

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyDrawer from "@/components/drawer/MyDrawer";
import MyLayout from "@/components/layout/MyLayout";
import LayoutRegister from "@/components/layout/layout_topbar";
import MyTabView from "@/components/table/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import { fetchPersonByID } from "@/service/client/srv.client.person";
import { useRef, useState } from "react";
import PersonFormRegister from "./components/PersonFormRegister";
import PersonSearch from "./components/PersonSearch";

export default function Person() {
  const [openFilter, setOpenFilter] = useState(false);

  const formTab = useRef(null as any); // para controlar o foco da tabview
  const formRef = useRef(null as any); // para manipulacao do formulario de cadastro.
  const formSearchRef = useRef(null as any); // para manipulação dos botoes principais da tela

  const MainButtons = (
    <MyHorizontalStack>
      <MyIconButton
        iconType={EnIconButtonType.NEW}
        onClick={() => formRef.current.clearForm()}
        text="Novo"
      />
      <MyIconButton
        iconType={EnIconButtonType.SEARCH}
        onClick={() => formSearchRef.current.onSearch()}
        text="Consultar"
      />
      <MyIconButton
        iconType={EnIconButtonType.FILTER}
        onClick={() => setOpenFilter(true)}
        text="Filtrar"
      />
    </MyHorizontalStack>
  );

  async function loadPerson(personID: number) {
    const { data } = await fetchPersonByID(personID);
    formRef.current.populateForm(data);
    formTab.current.setCurrentIndex(1);
  }

  return (
    <>
      <MyLayout>
        <LayoutRegister title="Pessoas" childrenBefore={MainButtons}>
          <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]} ref={formTab}>
            <PersonSearch ref={formSearchRef} onSelected={(id) => { id && loadPerson(id) }} />
            <PersonFormRegister ref={formRef} />
          </MyTabView>
        </LayoutRegister>
      </MyLayout>
      <MyDrawer title="Filtro da consulta" isOpen={openFilter} onClose={() => setOpenFilter(false)} key={Date.now()} />
    </>
  );
}
