import MyTable, { IMyTableColumn } from '@/components/table/MyTable';

const _columns: IMyTableColumn[] = [
  { key: 'es-id', label: 'Cód.' },
  { key: 'es-type', label: 'Tipo' },
  { key: 'es-bank-account-description', label: 'Conta bancária' },
  { key: 'es-total', label: 'Total' },
];

const EntrySearch = () => {
  return (
    <>
      <MyTable columns={_columns} datasource={[]}></MyTable>
    </>
  );
};

export default EntrySearch;