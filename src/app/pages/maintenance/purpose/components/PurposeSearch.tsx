//Hugo.
import MyTable, { IMyTableAction, IMyTableWrapper } from '@/components/table/MyTable';
import { TPurpose } from '@/type/purposeTypes';
import { findAllPurposeCase } from '@/use/purpose/findAll';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface IProps {
  onPurposeSelected: (purpose: TPurpose) => void;
}

const PurposeSearch = forwardRef((props: IProps, ref) => {
  useImperativeHandle(ref, () => {
    return {
      onSearch
    };
  });

  const [purposes, setPurposes] = useState<TPurpose[]>([]);

  async function onSearch() {
    let { data } = await findAllPurposeCase();
    setPurposes(data);
  }

  const dataSource: IMyTableWrapper[] = purposes?.map(({ id, description }) => ({
    data: [{ text: id }, { text: description }],
  }));

  const _onSelected = (rowIndex: number) => {
    const purpose = purposes[rowIndex];
    props.onPurposeSelected(purpose);
  }

  const _onDelete = (purpose: TPurpose) => {
    Criar o delete e testar o updateLocale.
  }

  const _actionButton: IMyTableAction[] = [
    {
      title: "Excluir",
      onClick: index => _onDelete(purposes[index])
    }
  ];

  return (
    <MyTable
      columnAction={_actionButton}
      key="tb-category-search"
      columns={[
        { key: 'id-category', label: 'Cód.', style: { width: '10%' } },
        { key: 'id-description', label: 'Descrição' },
      ]}
      datasource={dataSource}
      onSelectedRow={_onSelected}
    />
  );
});

export default PurposeSearch;
