import MyAccordion from '@/components/accordion/MyAccordion';
import MyAccordionPanel from '@/components/accordion/MyAccordionPanel';
import MyAccordionItem from '@/components/accordion/MyAccordtionItem';
import MyCardBox from '@/components/card/my-card/MyCardBox';
import MyTable, { IMyTableDataSource, IMyTableWrapper } from '@/components/table/MyTable';
import { getBankBalanceCase } from '@/use/bankAccount/getBankBalance';
import dayjs from 'dayjs';
import { CSSProperties, useEffect, useState } from 'react';

interface IBalanceResponseAPI {
  bank_account_description: string;
  bank_account_id: string;
  initial_date: string;
  initial_value: string;
  total: string;
}

interface IProps {
  initial_date: string;
  final_date: string;
}

const _style = {
  wrapper: {
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
  } as CSSProperties,
};

export default function HomeAccountBalance(props: IProps) {
  const [dataSource, setDataSource] = useState([] as IMyTableWrapper[]);

  useEffect(() => {
    const _loadBalance = async () => {
      const { data, success } = await getBankBalanceCase(props);

      if (!success) {
        return console.error('Fail to load balances...');
      }

      const dataSource = data.data.map(({ bank_account_description, total }: IBalanceResponseAPI) => {
        return { data: [{ text: bank_account_description }, { text: total }] as IMyTableDataSource[] };
      });

      setDataSource(dataSource);
    };

    if (dayjs(props.final_date).isValid()) {
      _loadBalance();
    }
  }, [props.final_date]);

  return (
    <MyCardBox
      title={{
        caption: 'Saldo em conta',
        options: {
          caption: 'Saldo em conta',
          children: [
            <MyAccordion>
              <MyAccordionItem title="Parâmetros">
                <MyAccordionPanel key="testehugo1">Teste Hugo</MyAccordionPanel>
                <MyAccordionPanel key="testehugo2">Teste Hugo</MyAccordionPanel>
                <MyAccordionPanel key="testehugo3">Teste Hugo</MyAccordionPanel>
                <MyAccordionPanel key="testehugo4">Teste Hugo</MyAccordionPanel>
                <MyAccordionPanel key="testehugo5">Teste Hugo</MyAccordionPanel>
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
              key: 'tb-det-balance-description',
              label: 'Descrição',
              style: { textAlign: 'left', width: '80%' },
            },
            {
              key: 'tb-det-balance-value',
              label: 'Valor',
              style: { textAlign: 'left' },
            },
          ]}
          datasource={dataSource}
          onSelectedRow={(rowIndex) => console.log(rowIndex)}
        />
      </div>
    </MyCardBox>
  );
}
