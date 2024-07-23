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
      [
        { text: 'Farmácia' },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
      ],
      [
        { text: 'Shopping' },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
      ],
      [
        { text: 'Outros' },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
      ],
      [
        { text: 'Agropet' },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
      ],
      [
        { text: 'Viagem' },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
        { text: '1295.33', style: { textAlign: 'right' } },
      ],
    ]}
  />
}