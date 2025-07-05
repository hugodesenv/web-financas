'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyCard from '@/components/card/my-card/MyCardBox';
import MyLayout from '@/components/layout/MyLayout';
import MyTopBar from '@/components/menu/topBar/MyTopBar';
import MyInputText from '@/components/text/MyInputText';
import { TEntry } from '@/type/entryTypes';
import dayjs from 'dayjs';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import HomeAccountBalance from './components/HomeAccountBalance';
import HomeDrawerTotalizations, { ITableData } from './components/HomeDrawerTotalizations';
import './style.css';
import { HomeChartEntries } from './components/HomeChartEntries';

export default function Home() {
  const [drawerTotalization, setDrawerTotalization] = useState({ data: [] as ITableData[][], isOpen: false, title: '' });
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [entriesData, setEntriesData] = useState([] as TEntry[]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      selected_date: dayjs().format('YYYY-MM-DD'),
    },
  });

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
        <MyCard title={{ caption: 'Comparativo entre mêses' }}>
          <HomeChartEntries />
        </MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <div className="page-card-bills-by-type">
            <MyCard title={{ caption: 'Total por finalidade' }}>
              <p>Incluir a totalização pela finalidade aqui</p>
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
