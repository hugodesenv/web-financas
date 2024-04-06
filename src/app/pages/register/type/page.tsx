import LayoutRegister from "@/components/layout/layout_register";
import { MyTabView } from "@/components/tabview/MyTabView";
import FormTypeRegister from "./components/FormTypeRegister";

export default function TypeRegister() {
  function TabSearch() {
    return <>Tab search aqui</>;
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
