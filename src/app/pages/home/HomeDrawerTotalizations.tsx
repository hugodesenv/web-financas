import MyDrawer, { IPropsMyDrawer } from "@/components/drawer/MyDrawer";
import MyTable from "@/components/table/MyTable";

export interface ITableData {
  date: string,
  description: string,
  type: string,
  value: number,
}

export default function HomeDrawerTotalizations(props: {
  drawerProps: IPropsMyDrawer,
  data: ITableData[][]
}) {
  const dataSource = props.data.map(([data]: ITableData[]) => {
    return [
      { text: data.date },
      { text: data.description },
      { text: data.type },
      { text: data.value },
    ]
  });

  return (
    <MyDrawer {...props.drawerProps}>
      <MyTable
        columns={[
          { key: 'tba-date', label: 'Data' },
          { key: 'tba-description', label: 'Descrição' },
          { key: 'tba-type', label: 'Tipo' },
          { key: 'tba-value', label: 'Valor' }
        ]}
        datasource={dataSource}
      />
    </MyDrawer>
  )
}