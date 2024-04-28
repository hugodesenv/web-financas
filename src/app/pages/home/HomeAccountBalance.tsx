import MyAccordion from "@/components/accordion/MyAccordion";
import MyAccordionPanel from "@/components/accordion/MyAccordionPanel";
import MyAccordionItem from "@/components/accordion/MyAccordtionItem";
import MyTable from "@/components/table/MyTable";

export default function HomeAccountBalance() {
  return (
    <div>
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
        <MyAccordionItem title="Filtragem" defaultOpen={true}>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
          <MyAccordionPanel>Conteudinho aqui33</MyAccordionPanel>
        </MyAccordionItem>
        <MyAccordionItem title="Filtragem 2" defaultOpen={false}>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
        </MyAccordionItem>
        <MyAccordionItem title="Filtragem" defaultOpen>
          <MyAccordionPanel>Conteudinho aqui</MyAccordionPanel>
        </MyAccordionItem>
      </MyAccordion>
      <div style={{ color: "red", marginTop: "20px", fontStyle: "italic" }}>
        Incluir menu de opções aqui para desconsiderar previsões (Ou seja, que
        estão com data futura de pagamento) <br />
        <br />
        Incluir transferência entre contas. Verificar qual módulo incluir essa
        opção. <br /> <br />
        Mostrar um totalizador de contas a pagar e a receber do mês pelo tipo.
        Utilizar os mesmos objetos que serão mostrados nas totalizações de
        receitas, despesas e diferença.
        <br />
        Verificar uma melhor forma para mostrar a receita livre, ou seja, o que
        eu posso gastar (Trabalhar com filtros). <br />
        <br />
        Criar o componente que quando clica, mostra mais... Por os filtros
        dentro dele!
        <br />
        <br />
        Ao clicar no totalizador, listrar os itens cadastrados que geraram o tal
        valor.
      </div>
    </div>
  );
}
