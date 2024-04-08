import LayoutRegister from "@/components/layout/layout_register";
import { MyTabView } from "@/components/tabview/MyTabView";
import FormTypeRegister from "./components/FormTypeRegister";
import MyTable from "@/components/table/MyTable";

export default function TypeRegister() {
  function TabSearch() {
    return (
      <MyTable
        columns={
          [
            { key: 'ID', label: 'Código' },
            { key: 'description', label: 'Descrição' }
          ]
        }
        datasource={[
          { key: '1', description: 'Descricao1' },
          { key: '1', description: 'Descricao2' },
          { key: '1', description: 'Descricao3' },
          { key: '1', description: 'Descricao4' },
          { key: '1', description: 'Descricao5' },
          { key: '1', description: 'Descricao6' },
        ]}
      />
    );
  }

  return (
    <LayoutRegister title="Tipos">
      <MyTabView titles={["Consulta", "Digitação"]}>
        <TabSearch />
        <FormTypeRegister />
      </MyTabView>
    </LayoutRegister>
  );
}
