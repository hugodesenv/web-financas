'use client';

import MyIconButton, { EnIconButtonType } from '@/components/button/myIconButton/MyIconButton';
import MyLayout from '@/components/layout/MyLayout';
import LayoutTopBar from '@/components/layout/layout_topbar';
import MyTabView from '@/components/table/tabview/MyTabView';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { useRef } from 'react';
import PurposeSearch from './components/PurposeSearch';
import { PurposeFormRegister } from './components/PurposeFormRegister';
import { TPurpose, TPurposeDefaultValue } from '@/type/purposeTypes';
import { findByIDPurposeUseCase } from '@/use/purpose/findByID';

export default function Purpose() {
  const formRef = useRef(null as any);
  const formSearchRef = useRef(null as any);
  const formTab = useRef(null as any);

  // Componente dos botoes principais do formulario
  const FormButton = (
    <MyHorizontalStack>
      <MyIconButton text="Novo" iconType={EnIconButtonType.NEW} onClick={(e) => _onNew()} />
      <MyIconButton text="Consultar" iconType={EnIconButtonType.SEARCH} onClick={() => formSearchRef.current.onSearch()} />
    </MyHorizontalStack>
  );

  const _loadPurpose = async ({ id }: TPurpose) => {
    const { data } = await findByIDPurposeUseCase(id ?? 0);
    if (data) {
      formRef.current.populateForm(data);
      formTab.current.setCurrentIndex(1);
    }
  }

  const _onNew = () => {
    formRef.current.populateForm(TPurposeDefaultValue);
    formTab.current.setCurrentIndex(1);
  }

  return (
    <MyLayout>
      <h1 style={{ color: "red" }}>Verificar a exclusão</h1>
      <LayoutTopBar title="Finalidades" childrenBefore={FormButton}>
        <MyTabView ref={formTab} titles={[
          { caption: 'Consulta' },
          { caption: 'Digitação' }
        ]} >
          <PurposeSearch ref={formSearchRef} onPurposeSelected={_loadPurpose} />
          <PurposeFormRegister ref={formRef} />
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  );
}
