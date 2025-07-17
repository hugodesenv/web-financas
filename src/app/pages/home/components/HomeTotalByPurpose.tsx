import MyDrawer from "@/components/drawer/MyDrawer";
import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { sumEntriesByPurpose } from "@/features/entry/entryHelper";
import { TEntry } from "@/features/entry/entryTypes";
import { CSSProperties, useEffect, useState } from "react";
import EntrySearchTable from "../../maintenance/entry/components/EntrySearchTable";

interface IProps {
  entries?: TEntry[]
}

const commonTotalsStyle: CSSProperties = {
  maxWidth: '40px',
  textAlign: 'right'
}

const tableColumns: IMyTableColumn[] = [
  { label: "Descrição", key: "htbp-description", style: { maxWidth: '70px', textAlign: 'justify' } },
  { label: "Receita (+)", key: "htbp-receive", style: commonTotalsStyle },
  { label: "Despesa (-)", key: "htbp-pay", style: commonTotalsStyle },
  { label: "Saldo (=)", key: "htbp-total", style: commonTotalsStyle },
];

const _totalsStyle = (value?: number): CSSProperties => {
  return {
    color: (value ?? 0) < 0 ? 'red' : 'inherit',
    textAlign: 'right',
  }
}

export const HomeTotalByPurpose = ({ entries: entriesProps }: IProps) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [entries, setEntries] = useState<TEntry[]>([]);

  const dataSource = () => {
    const _entries = sumEntriesByPurpose(entriesProps ?? []);

    const res = Object.entries(_entries).reduce<IMyTableWrapper[]>((prev, curr) => {
      const { balance, description, pay, receive, id } = curr[1];

      prev.push({
        primaryKey: { id },
        data: [
          { text: description },
          { text: receive, style: _totalsStyle() },
          { text: pay, style: _totalsStyle() },
          { text: balance, style: _totalsStyle(balance) },
        ],
      });

      return prev;
    }, []);

    return res;
  }

  function onSelectedrow(_: number, data: any) {
    const _entriesByPurpose = entriesProps?.filter(({ purpose }) => purpose.id === data?.primaryKey?.id) ?? [];
    
    setEntries(_entriesByPurpose);
    setOpenDetail(true);
  }

  return (
    <>
      <MyTable
        columns={tableColumns}
        datasource={dataSource()}
        onSelectedRow={onSelectedrow}
      />
      <MyDrawer
        title="Detalhamentos"
        key={Date.now()}
        isOpen={openDetail}
        onClose={() => setOpenDetail(false)}
      >
        <EntrySearchTable entries={entries} />
      </MyDrawer>
    </>
  )
} 