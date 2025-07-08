import MyTable, { IMyTableColumn, IMyTableWrapper } from "@/components/table/MyTable"
import { EnEntryType, TEntry } from "@/type/entryTypes"

interface IProps {
  entries?: TEntry[]
}

const tableColumns: IMyTableColumn[] = [
  { label: "Descrição", key: "htbp-description", style: { maxWidth: '70px' } },
  { label: "Receita (+)", key: "htbp-receive", style: { maxWidth: '40px' } },
  { label: "Despesa (-)", key: "htbp-pay", style: { maxWidth: '40px' } },
  { label: "Saldo (=)", key: "htbp-total", style: { maxWidth: '40px' } },
];

type IBuildEntriesByPurpose = {
  [purposeID: number]: {
    description: string;
    receive: number;
    pay: number;
  }
}

const buildEntriesByPurpose = (entries: TEntry[]) => {
  const res = entries.reduce<IBuildEntriesByPurpose>((prev, curr: TEntry) => {
    const purposeID = curr.purpose.id ?? 0;

    if (!prev[purposeID]) {
      prev[purposeID] = {
        description: curr.purpose.description,
        receive: 0,
        pay: 0,
      };
    }

    switch (curr.type) {
      case EnEntryType.PAYABLE: {
        prev[purposeID].pay += curr.total;
        break;
      }
      case EnEntryType.RECEIVABLE: {
        prev[purposeID].receive += curr.total;
        break;
      }
    }

    return prev;
  }, {});

  return res;
}

export const HomeTotalByPurpose = ({ entries }: IProps) => {
  console.log("Tratar esse resultado #HUGO", buildEntriesByPurpose(entries ?? []))

  return (
    <MyTable columns={tableColumns} datasource={[]} />
  )
} 