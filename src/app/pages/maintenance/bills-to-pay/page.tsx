import LayoutTopBar from "@/components/layout/layout_topbar";
import BillsToPaySearch from "./components/BillsToPaySearch";
import BillsToPayRegister from "./components/BillsToPayRegister";
import MyTabView from "@/components/table/tabview/MyTabView";

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
