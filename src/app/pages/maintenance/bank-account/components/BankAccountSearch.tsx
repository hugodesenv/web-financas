import MyAlert from "@/components/alert/MyAlert";
import { useMyAlert } from "@/components/alert/hook";
import { useMyAsyncModal } from "@/components/modal/useMyAsyncModal";
import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { useBankAccount } from "@/features/bankAccount/useCaseBankAccount";
import { TPropsSearchScreen } from "@/utils/commomTypes";
import { forwardRef, useImperativeHandle, useState } from "react";

const _columns: IMyTableColumn[] = [
  { key: 'bank-ac-id', label: 'Cód.' },
  { key: 'bank-ac-description', label: 'Descrição' },
];

const BankAccountSearch = forwardRef((props: TPropsSearchScreen, ref) => {
  const { alertState, setAlertState } = useMyAlert();
  const { MyAsyncModal, showModal } = useMyAsyncModal();
  const { findAll, deleteAccount } = useBankAccount();


  const [bankAccount, setBankAccount] = useState([] as TBankAccount[]);

  useImperativeHandle(ref, function () {
    return {
      onSearch,
    }
  });

  async function onSearch() {
    const { data } = await findAll();
    setBankAccount(data);
  }

  function onSelect(row: number) {
    const bank = bankAccount[row];
    props.onSelect(bank);
  }

  async function onDelete(index: number) {
    const id = bankAccount[index].id ?? 0;

    const confirmed = await showModal('Excluir conta bancária', `Deseja realmente excluir a conta bancária ${id}?`);
    if (!confirmed) return;

    const res = await deleteAccount(id);

    if (!res.success) {
      setAlertState({ message: "Não foi possível excluir a conta bancária", color: 'red' })
      return;
    }

    setBankAccount((value) => value.filter(p => p.id !== id) ?? []);
    setAlertState({ message: `Conta bancária ${id} excluída com sucesso!`, color: 'blue', key: Date.now() });
  }

  // transforming results in datasource
  const _dataSource: IMyTableWrapper[] = bankAccount?.map(({ id, description }) => {
    return {
      data: [
        { text: id, style: { width: '70px' } },
        { text: description }
      ]
    } as IMyTableWrapper
  }) ?? [];

  return (
    <>
      <MyTable
        key='tb-bankaccount-search'
        columns={_columns}
        datasource={_dataSource}
        onSelectedRow={onSelect}
        columnAction={[{ title: 'Excluir', onClick: onDelete }]}
      />
      <MyAsyncModal />
      <MyAlert {...alertState} />
    </>
  );
});

export default BankAccountSearch;