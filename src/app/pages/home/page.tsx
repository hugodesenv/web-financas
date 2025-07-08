'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyCard from '@/components/card/my-card/MyCardBox';
import MyLayout from '@/components/layout/MyLayout';
import MyTopBar from '@/components/menu/topBar/MyTopBar';
import MyInputText from '@/components/text/MyInputText';
import { entriesObjectFilteringBySpecificDate } from '@/service/entryService';
import { TEntry } from '@/type/entryTypes';
import { findAllEntryUseCase } from '@/use/entry/findAll';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import HomeAccountBalance from './components/HomeAccountBalance';
import { HomeChartEntries } from './components/HomeChartEntries';
import { HomeTotalByPurpose } from './components/HomeTotalByPurpose';
import './style.css';

export default function Home() {
  // hooks.
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'))
  const { data, isLoading } = useQuery({
    queryKey: ["entries", selectedDate],
    queryFn: async () => await fetchGraphData(),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      selected_date: dayjs().format('YYYY-MM-DD'),
    },
  });

  async function fetchGraphData(): Promise<TEntry[]> {
    const initial_date = dayjs(selectedDate).subtract(6, 'month').format("YYYY-MM-DD");

    const filter = {
      initial_issue_date: initial_date,
      final_issue_date: selectedDate
    }

    return await findAllEntryUseCase(filter) ?? [];
  }

  const onTopbarSubmit: SubmitHandler<any> = async (data: { selected_date: string }) => {
    const selectedDate = dayjs(data.selected_date);

    if (!selectedDate.isValid()) return;

    setSelectedDate(data.selected_date);
  };

  return (
    <MyLayout>
      <form id="searchHomeForm" onSubmit={handleSubmit(onTopbarSubmit)}>
        <MyTopBar title="Home">
          <MyInputText title="" type="date" {...register('selected_date')} />
          <MyButton isLoading={isLoading} theme="dark" type='submit' style={{ minWidth: 'min-content' }}>
            <MdOutlineSearch />
          </MyButton>
        </MyTopBar>
      </form>
      <div className="page-display-gap page-content-body">
        <MyCard title={{ caption: 'Comparativo entre mêses' }}>
          <HomeChartEntries entries={data ?? []} base_date={selectedDate} />
        </MyCard>
        <MyCard>
          <p style={{ textAlign: 'center', color: 'gray', fontWeight: 500, fontSize: '10px' }}>
            Resultado do dia {dayjs(selectedDate).format("DD/MM/YYYY")}
          </p>
        </MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <div className="page-card-bills-by-type">
            <MyCard title={{ caption: `Total por finalidade` }}>
              <HomeTotalByPurpose entries={entriesObjectFilteringBySpecificDate(selectedDate, data ?? [])} />
            </MyCard>
          </div>
          <div className="page-card-balance">
            <HomeAccountBalance
              initial_date={'1900-01-01'}
              final_date={selectedDate}
            />
          </div>
        </div>
      </div>
    </MyLayout>
  );
}
