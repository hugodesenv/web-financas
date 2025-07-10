import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable";
import { getEntriesByPurpose } from "@/features/entry/entryHelper";
import { TEntry } from "@/features/entry/entryTypes";
import { CSSProperties } from "react";

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

export const HomeTotalByPurpose = ({ entries }: IProps) => {

  const totalsStyle = (value?: number): CSSProperties => {
    return {
      color: (value ?? 0) < 0 ? 'red' : 'inherit',
      textAlign: 'right',
    }
  }

  const dataSource = () => {
    const _entries = getEntriesByPurpose(entries ?? []);

    const res = Object.entries(_entries).reduce<IMyTableWrapper[]>((prev, curr) => {
      const { balance, description, pay, receive } = curr[1];

      prev.push({
        data: [
          { text: description },
          { text: receive, style: totalsStyle() },
          { text: pay, style: totalsStyle() },
          { text: balance, style: totalsStyle(balance) },
        ]
      });

      return prev;
    }, []);

    return res;
  }

  return (
    <MyTable
      columns={tableColumns}
      datasource={dataSource()}
    />
  )
} 