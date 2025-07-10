'use client';

import MyIconButton, { EnIconButtonType } from '@/components/button/myIconButton/MyIconButton';
import MyLayout from '@/components/layout/MyLayout';
import LayoutTopBar from '@/components/layout/layout_topbar';
import MyTabView from '@/components/table/tabview/MyTabView';
import MyStack from '@/components/utils/MyHorizontalStack';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import EntryFilterDrawer, { IEntryFilterData, TTypeFieldEntryFilter } from './components/EntryFilterDrawer';
import EntryFormRegister from './components/EntryFormRegister';
import EntrySearch from './components/EntrySearch';

const _columnsTitle = [{ caption: 'Consulta' }, { caption: 'Digitação' }];

export default function Entry() {
  const formSearchRef = useRef(null as any);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterData, setFilterData] = useState({ issueEnd: dayjs('2999-31-12').toDate() } as IEntryFilterData);

  const FormButton = (
    <MyStack>
      <MyIconButton
        text="Novo"
        iconType={EnIconButtonType.NEW}
        onClick={() => { }}
      />
      <MyIconButton
        text="Consultar"
        iconType={EnIconButtonType.SEARCH}
        onClick={() => formSearchRef.current.onSearch()}
      />
      <MyIconButton
        text="Filtro"
        iconType={EnIconButtonType.FILTER}
        onClick={() => setOpenFilter((curr) => !curr)}
      />
    </MyStack>
  );

  function _handleChangeFilter(newValue: string, name: TTypeFieldEntryFilter) {
    switch (name) {
      case TTypeFieldEntryFilter.issueDate: {
        setFilterData(prev => ({ ...prev, issueEnd: dayjs(newValue).toDate() }))
        break;
      }
    }
  }

  return (
    <>
      <MyLayout>
        <LayoutTopBar title="Lançamentos" childrenBefore={FormButton}>
          <MyTabView titles={_columnsTitle}>
            <EntrySearch ref={formSearchRef} />
            <EntryFormRegister />
          </MyTabView>
        </LayoutTopBar>
      </MyLayout>
      <EntryFilterDrawer
        isOpen={openFilter}
        onClose={() => setOpenFilter((curr) => !curr)}
        data={filterData}
        onChange={_handleChangeFilter}
      />
    </>
  );
}
