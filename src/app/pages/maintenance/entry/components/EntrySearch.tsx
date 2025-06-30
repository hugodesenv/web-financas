/** #HUGO: Continuar. */

import MyTable, { IMyTableColumn } from '@/components/table/MyTable';
import { TEntry } from '@/type/entryTypes';
import { findAllEntryUseCase } from '@/use/entry/findAll';
import { forwardRef, useImperativeHandle, useState } from 'react';

const _columns: IMyTableColumn[] = [
  { key: 'es-id', label: 'Cód.' },
  { key: 'es-type', label: 'Tipo' },
  { key: 'es-bank-account-description', label: 'Conta bancária' },
  { key: 'es-total', label: 'Total' },
];

const EntrySearch = forwardRef((props, ref) => {
  const [entries, setEntries] = useState([] as TEntry[]);

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const res = await findAllEntryUseCase();
  }

  return (
    <>
      <MyTable
        key='tb-entry-search'
        columns={_columns}
        datasource={[]}
      />
    </>
  );
});

export default EntrySearch;