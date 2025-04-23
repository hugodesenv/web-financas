'use client';

import MyIconButton, { EnIconButtonType } from '@/components/button/myIconButton/MyIconButton';
import MyLayout from '@/components/layout/MyLayout';
import LayoutTopBar from '@/components/layout/layout_topbar';
import MyTabView from '@/components/table/tabview/MyTabView';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { useRef } from 'react';
import EntryFormRegister from './components/EntryFormRegister';
import EntrySearch from './components/EntrySearch';

const _columnsTitle = [{ caption: 'Consulta' }, { caption: 'Digitação' }];

export default function Entry() {
  const formSearchRef = useRef(null as any);

  const FormButton = (
    <MyHorizontalStack>
      <MyIconButton text="Novo" iconType={EnIconButtonType.NEW} onClick={() => {}} />
      <MyIconButton text="Consultar" iconType={EnIconButtonType.SEARCH} onClick={() => formSearchRef.current.onSearch()} />
    </MyHorizontalStack>
  );

  return (
    <MyLayout>
      <LayoutTopBar title="Lançamentos" childrenBefore={FormButton}>
        <MyTabView titles={_columnsTitle}>
          <EntrySearch />
          <EntryFormRegister />
        </MyTabView>
      </LayoutTopBar>
    </MyLayout>
  );
}
