import MyTable from "@/components/table/MyTable";

export default function HomeGroupExpenses() {
  return <MyTable
    columns={[
      { key: 'tbge-description', label: 'Descrição', style: { width: '30%' } },
      { key: 'tbge-value', label: 'Ganhos (+)', style: { textAlign: 'right', width: '20%' } },
      { key: 'tbge-value', label: 'Gastos (-)', style: { textAlign: 'right', width: '20%' } },
      { key: 'tbge-value', label: 'Total (=)', style: { textAlign: 'right', width: '20%' } },
    ]}
    datasource={[
      {
        data: [
          { text: 'Minha descicao' },
          { text: '10' },
          { text: '10' },
          { text: '10' },
        ]
      }
    ]}
  />
}