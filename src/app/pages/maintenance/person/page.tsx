'use client';

import MyIconButton, { EnIconButtonType } from '@/components/button/myIconButton/MyIconButton';
import MyDrawer from '@/components/drawer/MyDrawer';
import MyLayout from '@/components/layout/MyLayout';
import LayoutRegister from '@/components/layout/layout_topbar';
import MyTabView from '@/components/table/tabview/MyTabView';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { findByIDPersonCase } from '@/use/person/findByID';
import { useRef, useState } from 'react';
import PersonFormRegister from './components/PersonFormRegister';
import PersonSearch from './components/PersonSearch';
import { TPersonDefaultValues } from '@/type/personTypes';

export default function Person() {
  const [openFilter, setOpenFilter] = useState(false);

  const formTab = useRef(null as any); // para controlar o foco da tabview
  const formRef = useRef(null as any); // para manipulacao do formulario de cadastro.
  const formSearchRef = useRef(null as any); // para manipulação dos botoes principais da tela

  const FormButton = (
    <MyHorizontalStack>
      <MyIconButton iconType={EnIconButtonType.NEW} onClick={() => formRef.current.populateForm(TPersonDefaultValues)} text="Novo" />
      <MyIconButton iconType={EnIconButtonType.SEARCH} onClick={() => formSearchRef.current.onSearch()} text="Consultar" />
      <MyIconButton iconType={EnIconButtonType.FILTER} onClick={() => setOpenFilter(true)} text="Filtrar" />
    </MyHorizontalStack>
  );

  async function loadPerson(personID: number) {
    const { data } = await findByIDPersonCase(personID);
    formRef.current.populateForm(data);
    formTab.current.setCurrentIndex(1);
  }

  return (
    <>
      <MyLayout>
        <LayoutRegister title="Pessoas" childrenBefore={FormButton}>
          <MyTabView titles={[{ caption: 'Consulta' }, { caption: 'Digitação' }]} ref={formTab}>
            <PersonSearch
              ref={formSearchRef}
              onSelected={async (id) => {
                id && (await loadPerson(id));
              }}
            />
            <PersonFormRegister ref={formRef} />
          </MyTabView>
        </LayoutRegister>
      </MyLayout>
      <MyDrawer title="Filtro da consulta" isOpen={openFilter} onClose={() => setOpenFilter(false)} key={Date.now()} />
    </>
  );
}
