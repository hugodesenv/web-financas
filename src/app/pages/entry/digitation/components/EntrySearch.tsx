import MyTable, { IMyTableColumn } from '@/components/table/MyTable';
import { IEntryDTO } from '@/type/entryTypes';
import { getEntriesCase } from '@/use/entry/getEntries';
import React, { useImperativeHandle, useState } from 'react';

const _columns: IMyTableColumn[] = [
  { key: 'es-id', label: 'Cód.' },
  { key: 'es-type', label: 'Tipo' },
  { key: 'es-bank-account-description', label: 'Conta bancária' },
  { key: 'es-total', label: 'Total' },
];

interface IProps {

}

const EntrySearch = React.forwardRef((props: IProps, ref) => {
  const [entries, setEntries] = useState([] as IEntryDTO[]);

  useImperativeHandle(ref, () => {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const res = await getEntriesCase();
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