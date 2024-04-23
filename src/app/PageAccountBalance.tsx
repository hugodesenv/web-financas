import MyTable from "@/components/table/MyTable";

export default function PageAccountBalance() {
  return <>
    <MyTable
      columns={[
        { key: 'tb-det-balance-cod', label: 'Cód.', style: { width: '20px' } },
        { key: 'tb-det-balance-description', label: 'Descrição', style: { textAlign: 'left', width: '60%' } },
        { key: 'tb-det-balance-value', label: 'Valor', style: { textAlign: 'left' } }
      ]}
      datasource={[
        [
          { text: '1' },
          { text: 'Hugo Itaú' },
          { text: '10.339,92' }
        ],
        [
          { text: '2' },
          { text: 'Gabriella Itaú' },
          { text: '50.339,92' }
        ],
      ]}
    />
    <div style={{ color: 'red', marginTop: '20px', fontStyle: 'italic' }}>
      Incluir menu de opções aqui para desconsiderar previsões (Ou seja, que estão com data futura de pagamento) <br /><br />
      Incluir transferência entre contas. Verificar qual módulo incluir essa opção. <br /> <br />
      Mostrar um totalizador de contas a pagar e a receber do mês pelo tipo. Utilizar os mesmos objetos que serão mostrados nas totalizações de receitas, despesas e diferença.<br />
      Verificar uma melhor forma para mostrar a receita livre, ou seja, o que eu posso gastar.
    </div>
  </>
}