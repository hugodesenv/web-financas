import MyTable from '@/components/table/MyTable';

interface IProps {
  data: Record<
    string,
    {
      description: string;
      income: number;
      expense: number;
    }
  >;
}

export default function HomeGroupExpenses(props: IProps) {
  return (
    <MyTable
      columns={[
        { key: 'tbge-description', label: 'Descrição', style: { width: '30%' } },
        { key: 'tbge-value', label: 'Ganhos (+)', style: { textAlign: 'left', width: '20%' } },
        { key: 'tbge-value', label: 'Gastos (-)', style: { textAlign: 'left', width: '20%' } },
        { key: 'tbge-value', label: 'Total (=)', style: { textAlign: 'left', width: '20%' } },
      ]}
      datasource={Object.keys(props.data).map((key) => {
        const { description, income, expense } = props.data[key];

        return {
          data: [{ text: description }, { text: income }, { text: expense }, { text: income - expense }],
        };
      })}
    />
  );
}
