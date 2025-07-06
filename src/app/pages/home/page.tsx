'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyCard from '@/components/card/my-card/MyCardBox';
import MyLayout from '@/components/layout/MyLayout';
import MyTopBar from '@/components/menu/topBar/MyTopBar';
import MyInputText from '@/components/text/MyInputText';
import { findAllEntryUseCase } from '@/use/entry/findAll';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import HomeAccountBalance from './components/HomeAccountBalance';
import { HomeChartEntries } from './components/HomeChartEntries';
import './style.css';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await findAllEntryUseCase(),
    queryKey: ["entries"],
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      selected_date: dayjs().format('YYYY-MM-DD'),
    },
  });

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
          <HomeChartEntries entries={data ?? []} />
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
    </MyLayout>
  );
}
