import { useMyAsyncModal } from "@/components/modal/useMyAsyncModal";
import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { EntryModeToDescription, EntryTypeToDescription, TEntry } from "@/features/entry/entryTypes";
import dayjs from "dayjs";

interface IProps {
  entries: TEntry[]
}

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

const EntrySearchTable = (props: IProps) => {
  const { showModal, MyAsyncModal } = useMyAsyncModal();

  const dataSource: IMyTableWrapper[] = props.entries?.map((entry) => {
    return {
      data: [
        { text: entry.id },
        { text: entry.issue_date, onGetText: (p) => dayjs(p).format('DD/MM/YYYY') },
        { text: entry.type, onGetText: (p: keyof typeof EntryTypeToDescription) => EntryTypeToDescription[p] },
        { text: entry.person.name },
        { text: entry.purpose.description },
        { text: entry.mode, onGetText: (p: keyof typeof EntryModeToDescription) => EntryModeToDescription[p] },
        { text: entry.bankAccount.description },
        { text: entry.total, onGetText: (p: number) => p.toFixed(2) },
      ],
      primaryKey: { id: entry.id }
    } as IMyTableWrapper
  }) ?? [];

  async function onDelete(index: number) {
    const confirmed = await showModal('Confirmação', `Deseja realmente excluir o lançamento ${props.entries[index].id}?`);
    console.log('pos confirm', confirmed);
    if (confirmed) {

    }
  }

  return <>
    <MyTable
      key='tb-entry-search'
      columns={_columns}
      datasource={dataSource}
      columnAction={[
        { title: "Excluir", onClick: onDelete }
      ]}
    />
    <MyAsyncModal />
  </>
}

export default EntrySearchTable;