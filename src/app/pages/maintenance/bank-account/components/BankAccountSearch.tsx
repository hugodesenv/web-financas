import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { TPropsSearchScreen } from "@/utils/commomTypes";
import { findAllBankAccountUseCase } from "@/features/bankAccount/useCase/findAllBankAccountCase";
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

  // event when click on row table to delete register
  async function onDelete(index: number) {
    console.log("Tratar a exclusao. Item selecionado: ", bankAccount[index]);
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
        columnAction={[{ title: 'Excluir', onClick: (r) => onDelete(r) }]}
      />
    </>
  );
});

export default BankAccountSearch;