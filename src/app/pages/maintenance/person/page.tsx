'use client'

import MyIconButton, { EnIconButtonType } from "@/components/button/myIconButton/MyIconButton";
import MyLayout from "@/components/layout/MyLayout";
import LayoutRegister from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import MyHorizontalStack from "@/components/utils/MyHorizontalStack";
import { useRef, useState } from "react";
import PersonFormRegister from "./components/PersonFormRegister";
import PersonSearch from "./components/PersonSearch";
import { fetchPersonByID } from "@/service/client/srv.client.person";
import MyDrawer from "@/components/drawer/MyDrawer";

export default function Person() {
  const [openFilter, setOpenFilter] = useState(false);
  const formRef = useRef(null as any); // para manipulacao do formulario de cadastro.
  const formSearchRef = useRef(null as any); // para manipulação dos botoes principais da tela

  const MainButtons = (
    <MyHorizontalStack>
      <MyIconButton
        iconType={EnIconButtonType.NEW}
        isLoading={false}
        onClick={() => formRef.current.clearForm()}
      />
      <MyIconButton
        type="submit"
        form="fixed-person-register"
        iconType={EnIconButtonType.SAVE}
        isLoading={false}
      />
      <MyIconButton
        iconType={EnIconButtonType.SEARCH}
        isLoading={false}
        onClick={() => formSearchRef.current.onSearch()}
      />
      <MyIconButton
        iconType={EnIconButtonType.FILTER}
        onClick={() => setOpenFilter(true)}
      />
    </MyHorizontalStack>
  );

  async function loadPerson(personID: number) {
    const { data } = await fetchPersonByID(personID);
    formRef.current.populateForm(data);
  }

  return (
    <>
      <MyLayout>
        <LayoutRegister title="Pessoas" childrenBefore={MainButtons}>
          <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
            <PersonSearch ref={formSearchRef} onSelected={(id) => { id && loadPerson(id) }} />
            <PersonFormRegister ref={formRef} />
          </MyTabView>
        </LayoutRegister>
      </MyLayout>
      <MyDrawer title="Filtro da consulta" isOpen={openFilter} onClose={() => setOpenFilter(false)} key={Date.now()} />
    </>
  );
}
