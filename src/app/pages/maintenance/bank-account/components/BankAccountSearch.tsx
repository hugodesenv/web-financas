import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { TBankAccount } from "@/type/bankAccountTypes";
import { findAllBankAccountUseCase } from "@/use/bankAccount/findAll";
import { forwardRef, useImperativeHandle, useState } from "react";

const _columns: IMyTableColumn[] = [
  { key: 'bank-ac-id', label: 'Cód.' },
  { key: 'bank-ac-description', label: 'Descrição' },
];

const BankAccountSearch = forwardRef((props, ref) => {
  const [bankAccount, setBankAccount] = useState([] as TBankAccount[]);

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const { data } = await findAllBankAccountUseCase();
    console.log(data);
    setBankAccount(data);
  }

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
      />
    </>
  );
});

export default BankAccountSearch;