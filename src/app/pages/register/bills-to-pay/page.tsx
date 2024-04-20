import LayoutTopBar from "@/components/layout/layout_topbar";
import { MyTabView } from "@/components/tabview/MyTabView";
import BillsToPaySearch from "./components/BillsToPaySearch";
import BillsToPayRegister from "./components/BillsToPayRegister";

export default function BillsToPay() {
  return (
    <LayoutTopBar title="Contas a pagar">
      <MyTabView titles={[{ caption: "Consulta" }, { caption: "Digitação" }]}>
        <BillsToPaySearch />
        <BillsToPayRegister />
      </MyTabView>
    </LayoutTopBar>
  );
}
