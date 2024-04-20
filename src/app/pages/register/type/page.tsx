import LayoutRegister from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import FormTypeRegister from "./components/FormTypeRegister";
import MyTable from "@/components/table/MyTable";

export default function TypeRegister() {
  function TabSearch() {
    return (
      <MyTable
        columns={[
          { key: "ID", label: "Código", style: { width: "10%" } },
          { key: "description", label: "Descrição" },
        ]}
        datasource={[
          [{ text: "1" }, { text: "Agropet" }],
          [{ text: "2" }, { text: "Farmácia" }],
          [{ text: "3" }, { text: "Mercado" }],
          [{ text: "4" }, { text: "Seguro" }],
          [{ text: "5" }, { text: "Outros" }],
        ]}
      />
    );
  }

  return (
    <LayoutRegister title="Tipos">
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <TabSearch />
        <FormTypeRegister />
      </MyTabView>
    </LayoutRegister>
  );
}
