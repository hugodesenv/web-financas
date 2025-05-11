//Hugo.
import MyTable, { IMyTableWrapper } from '@/components/table/MyTable';
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

  return (
    <MyTable
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
