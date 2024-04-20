import LayoutRegister from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import PersonFormRegister from "./components/PersonFormRegister";
import PersonSearch from "./components/PersonSearch";

export default function Person() {
  return (
    <LayoutRegister title="Pessoas">
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <PersonSearch />
        <PersonFormRegister />
      </MyTabView>
    </LayoutRegister>
  );
}
