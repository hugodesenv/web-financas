import MyAccordion from "@/components/accordion/MyAccordion";
import MyAccordionPanel from "@/components/accordion/MyAccordionPanel";
import MyAccordionItem from "@/components/accordion/MyAccordtionItem";
import MyTable from "@/components/table/MyTable";

export default function HomeAccountBalance() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <MyTable
        columns={[
          {
            key: "tb-det-balance-cod",
            label: "Cód.",
            style: { width: "20px" },
          },
          {
            key: "tb-det-balance-description",
            label: "Descrição",
            style: { textAlign: "left", width: "60%" },
          },
          {
            key: "tb-det-balance-value",
            label: "Valor",
            style: { textAlign: "left" },
          },
        ]}
        datasource={[
          [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }],
          [{ text: "2" }, { text: "Gabriella Itaú" }, { text: "50.339,92" }],
        ]}
      />
      <MyAccordion>
        <MyAccordionItem title="Parâmetros">
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
        </MyAccordionItem>
      </MyAccordion>
    </div>
  );
}
