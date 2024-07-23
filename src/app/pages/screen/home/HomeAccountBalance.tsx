import MyAccordion from "@/components/accordion/MyAccordion";
import MyAccordionPanel from "@/components/accordion/MyAccordionPanel";
import MyAccordionItem from "@/components/accordion/MyAccordtionItem";
import MyCardBox from "@/components/card/my-card/MyCardBox";
import MyTable from "@/components/table/MyTable";
import { CSSProperties } from "react";

const _style = {
  wrapper: {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  } as CSSProperties,
};

export default function HomeAccountBalance() {
  return (
    <MyCardBox
      title={{
        caption: "Saldo em conta",
        options: {
          caption: "Saldo em conta",
          children: [
            <MyAccordion>
              <MyAccordionItem title="Parâmetros">
                <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
              </MyAccordionItem>
            </MyAccordion>,
          ],
        },
      }}
    >
      <div style={_style.wrapper}>
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
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
            { dataSource: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }], object: {} },
          ]}
        />
      </div>
    </MyCardBox>
  );
}
