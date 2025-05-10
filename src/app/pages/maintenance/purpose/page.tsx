'use client';

import MyIconButton, { EnIconButtonType } from '@/components/button/myIconButton/MyIconButton';
import MyLayout from '@/components/layout/MyLayout';
import LayoutTopBar from '@/components/layout/layout_topbar';
import MyTabView from '@/components/table/tabview/MyTabView';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { useRef } from 'react';
import PurposeSearch from './components/PurposeSearch';
import { PurposeFormRegister } from './components/PurposeFormRegister';

export default function Purpose() {
  const formSearchRef = useRef(null as any);

  // Componente dos botoes principais do formulario
  const FormButton = (
    <MyHorizontalStack>
      <MyIconButton text="Novo" iconType={EnIconButtonType.NEW} onClick={() => { }} />
      <MyIconButton text="Consultar" iconType={EnIconButtonType.SEARCH} onClick={() => formSearchRef.current.onSearch()} />
    </MyHorizontalStack>
  );

  return (
    <MyLayout>
      <LayoutTopBar title="Finalidades" childrenBefore={FormButton}>
        <MyTabView titles={[{ caption: 'Consulta' }, { caption: 'Digitação' }]}>
          <PurposeSearch ref={formSearchRef} />
          <PurposeFormRegister />
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  );
}
