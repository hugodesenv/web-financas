'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyCard from '@/components/card/my-card/MyCardBox';
import MyTotalizationCard from '@/components/card/my-totalization-card/MyTotalizationCard';
import MyLayout from '@/components/layout/MyLayout';
import MyTopBar from '@/components/menu/topBar/MyTopBar';
import MyInputText from '@/components/text/MyInputText';
import { EnEntryType, TEntry } from '@/type/entryTypes';
import { getEntriesCase } from '@/use/entry/getEntries';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import HomeAccountBalance from './components/HomeAccountBalance';
import HomeDrawerTotalizations, { ITableData } from './components/HomeDrawerTotalizations';
import HomeGroupExpenses from './components/HomeGroupExpenses';
import './style.css';

export default function Home() {
  const [drawerTotalization, setDrawerTotalization] = useState({ data: [] as ITableData[][], isOpen: false, title: '' });
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [entriesData, setEntriesData] = useState([] as TEntry[]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      selected_date: dayjs().format('YYYY-MM-DD'),
    },
  });

  useEffect(() => {
    const _getEntries = async () => {
      const { data, success, message } = await getEntriesCase(selectedDate);

      if (!success) {
        return console.error('Fail to get entries from API', message);
      }

      setEntriesData(data);
    };

    if (dayjs(selectedDate).isValid()) {
      _getEntries();
    }
  }, [selectedDate]);

  function _onClickTotalization(event: any, pTitle: string) {
    // fazer o filtro para setar no drawer aqui
    setDrawerTotalization({
      data: [
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi SBO',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Limeira',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
        [
          {
            date: '28/04/2024',
            description: 'Cobasi Americana',
            type: 'Agropet',
            value: 209.44,
          },
        ],
      ],
      isOpen: true,
      title: pTitle,
    });
  }

  function _onCloseTotalization() {
    setDrawerTotalization((prev) => {
      return { ...prev, isOpen: false };
    });
  }

  const onTopbarSubmit: SubmitHandler<any> = async (data: { selected_date: string }) => {
    if (dayjs(data.selected_date).isValid()) {
      setSelectedDate(data.selected_date);
    }
  };

  const _totalizationValues = entriesData.reduce(
    (previousValue, { type, total }: TEntry) => {
      const _total = parseFloat(total);

      if (type === EnEntryType.PAYABLE) {
        return { ...previousValue, expense: previousValue.expense + _total };
      }

      return { ...previousValue, income: previousValue.income + _total };
    },
    { income: 0, expense: 0 },
  );

  const _totalByPurpose = entriesData.reduce(
    (prev: Record<string, { description: string; income: number; expense: number }>, { type, purpose, total }: TEntry) => {
      const { description, id } = purpose;

      if (!prev[id]) {
        prev[id] = { expense: 0, income: 0, description };
      }

      const _total = parseFloat(total ?? '0');
      if (type === EnEntryType.PAYABLE) {
        prev[id].expense += _total;
      } else {
        prev[id].income += _total;
      }

      return prev;
    },
    {} as Record<string, { description: string; income: number; expense: number }>,
  );

  return (
    <MyLayout>
      <form id="searchHomeForm" onSubmit={handleSubmit(onTopbarSubmit)}>
        <MyTopBar title="Home">
          <MyInputText title="" type="date" {...register('selected_date')} />
          <MyButton theme="dark" onClick={() => { }} style={{ minWidth: 'min-content' }}>
            <MdOutlineSearch />
          </MyButton>
        </MyTopBar>
      </form>
      <div className="page-display-gap page-content-body">
        <MyCard title={{ caption: 'Totalizadores' }}>
          <div className="page-totalization-content">
            <MyTotalizationCard
              title="Ganhos (+)"
              content={_totalizationValues.income}
              onClick={(e: any) => _onClickTotalization(e, 'Minhas receitas')}
              className="my-color-blue"
            />
            <MyTotalizationCard
              title="Gastos (-)"
              content={_totalizationValues.expense}
              onClick={(e: any) => _onClickTotalization(e, 'Minhas despesas')}
              className="my-color-red"
            />
            <MyTotalizationCard title="Saldo (=)" content={_totalizationValues.income - _totalizationValues.expense} className="my-color-gray" />
          </div>
        </MyCard>
        <MyCard title={{ caption: 'Estatísticas' }}></MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <div className="page-card-bills-by-type">
            <MyCard title={{ caption: 'Total por finalidade' }}>
              <HomeGroupExpenses data={_totalByPurpose} />
            </MyCard>
          </div>
          <div className="page-card-balance">
            <HomeAccountBalance initial_date={'1900-01-01'} final_date={selectedDate} />
          </div>
        </div>
      </div>
      {/** quando o usuario clica sob o totalizador, abrimos o drawer */}
      <HomeDrawerTotalizations
        data={drawerTotalization.data}
        drawerProps={{
          title: drawerTotalization.title,
          isOpen: drawerTotalization.isOpen,
          onClose: _onCloseTotalization,
        }}
      />
    </MyLayout>
  );
}
