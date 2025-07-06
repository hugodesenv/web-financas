/** #HUGO: Continuar. */

import MyTable, { IMyTableColumn, IMyTableWrapper } from '@/components/table/MyTable';
import { TEntry } from '@/type/entryTypes';
import { findAllEntryUseCase } from '@/use/entry/findAll';
import { forwardRef, useImperativeHandle, useState } from 'react';

const _columns: IMyTableColumn[] = [
  { key: 'es-id', label: 'Cód.' },
  { key: 'es-issue-date', label: 'Dt. emissão' },
  { key: 'es-type', label: 'Tipo' },
  { key: 'es-person-name', label: 'Nome' },
  { key: 'es-purpose-name', label: 'Finalidade' },
  { key: 'es-mode', label: 'Modo' },
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
    const entries = await findAllEntryUseCase();
    setEntries(entries);
  }

  const dataSource: IMyTableWrapper[] = entries?.map((entry) => {
    return {
      data: [
        { text: entry.id },
        { text: entry.issue_date },
        { text: entry.type },
        { text: entry.person.name },
        { text: entry.purpose.description },
        { text: entry.mode },
        { text: entry.bankAccount.description },
        { text: entry.total },
      ]
    } as IMyTableWrapper
  }) ?? [];

  return (
    <>
      <MyTable
        key='tb-entry-search'
        columns={_columns}
        datasource={dataSource}
      />
    </>
  );
});

export default EntrySearch;