import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { TBankAccount } from "@/type/bankAccountTypes";
import { TPropsSearchScreen } from "@/type/commomTypes";
import { findAllBankAccountUseCase } from "@/use/bankAccount/findAll";
import { forwardRef, useImperativeHandle, useState } from "react";

const _columns: IMyTableColumn[] = [
  { key: 'bank-ac-id', label: 'Cód.' },
  { key: 'bank-ac-description', label: 'Descrição' },
];

const BankAccountSearch = forwardRef((props: TPropsSearchScreen, ref) => {
  // states
  const [bankAccount, setBankAccount] = useState([] as TBankAccount[]);

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  // event to search all bank accounts in database
  async function onSearch() {
    const { data } = await findAllBankAccountUseCase();
    setBankAccount(data);
  }

  // event when clicked on grid row
  function onSelect(row: number) {
    const bank = bankAccount[row];
    props.onSelect(bank);
  }

  // transforming results in datasource
  const _dataSource: IMyTableWrapper[] = bankAccount?.map(({ id, description }) => {
    return {
      data: [
        { text: id, style: { width: '70px' } },
        { text: description }
      ]
    } as IMyTableWrapper
  });

  return (
    <>
      <MyTable
        key='tb-bankaccount-search'
        columns={_columns}
        datasource={_dataSource}
        onSelectedRow={onSelect}
      />
    </>
  );
});

export default BankAccountSearch;