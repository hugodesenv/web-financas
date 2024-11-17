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
                <MyAccordionPanel key='testehugo1' >Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel key='testehugo2'>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel key='testehugo3'>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel key='testehugo4'>Conteudinho aqui</MyAccordionPanel>
                <MyAccordionPanel key='testehugo5'>Conteudinho aqui</MyAccordionPanel>
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
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
            { data: [{ text: "1" }, { text: "Hugo Itaú" }, { text: "10.339,92" }] },
          ]}
          onSelectedRow={(rowIndex) => console.log(rowIndex)}
        />
      </div>
    </MyCardBox>
  );
}
