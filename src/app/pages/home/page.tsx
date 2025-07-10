'use client';

import MyButton from '@/components/button/myButton/MyButton';
import MyCard from '@/components/card/my-card/MyCardBox';
import MyLayout from '@/components/layout/MyLayout';
import MyTopBar from '@/components/menu/topBar/MyTopBar';
import MyInputText from '@/components/text/MyInputText';
import { getEntriesByIssueDate } from '@/features/entry/entryHelper';
import { TEntry } from '@/features/entry/entryTypes';
import { findAllEntryUseCase } from '@/features/entry/useCase/findAllEntryUseCase';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdOutlineSearch } from 'react-icons/md';
import HomeAccountBalance from './components/HomeAccountBalance';
import { HomeChartEntries } from './components/HomeChartEntries';
import { HomeTotalByPurpose } from './components/HomeTotalByPurpose';
import './style.css';
import MyStack from '@/components/utils/MyHorizontalStack';
import HomeTotalByPurposeFilter from './components/HomeTotalByPurposeFilter';

export default function Home() {
  // hooks.
  const [selectedDate, setSelectedDate] = useState(dayjs())

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
    const initial_date = selectedDate.subtract(6, 'month').format("YYYY-MM-DD");

    const filter = {
      initial_issue_date: initial_date,
      final_issue_date: selectedDate.format('YYYY-MM-DD')
    }

    return await findAllEntryUseCase(filter) ?? [];
  }

  const onTopbarSubmit: SubmitHandler<any> = async (data: { selected_date: string }) => {
    const selectedDate = dayjs(data.selected_date);

    if (!selectedDate.isValid()) return;

    setSelectedDate(selectedDate);
  };

  return (
    <MyLayout>
      <form id="searchHomeForm" onSubmit={handleSubmit(onTopbarSubmit)}>
        <MyTopBar title="Home">
          <MyInputText title="" type="date" {...register('selected_date')} />
          <MyButton isloading={isLoading} theme="dark" type='submit' style={{ minWidth: 'min-content' }}>
            <MdOutlineSearch />
          </MyButton>
        </MyTopBar>
      </form>
      <div className="page-display-gap page-content-body">
        <MyCard title={{ caption: 'Comparativo entre mêses' }}>
          <HomeChartEntries entries={data ?? []} base_date={selectedDate.format('YYYY-MM-DD')} />
        </MyCard>
        <div className="page-display-gap page-wrapper-balance">
          <div className="page-card-bills-by-type">
            <MyStack style={{ flexDirection: 'column' }}>
              <MyCard>
                <p style={{ textAlign: 'center', color: 'gray', fontWeight: 500, fontSize: '10px' }}>
                  Resultado do dia {dayjs(selectedDate).format("DD/MM/YYYY")}
                </p>
              </MyCard>
              <MyCard title={{ caption: `Total por finalidade`, options: { caption: 'Filtrar dados', children: <HomeTotalByPurposeFilter /> } }}>
                <HomeTotalByPurpose
                  entries={getEntriesByIssueDate(data ?? [], {
                    month: selectedDate.month() + 1,
                    year: selectedDate.year(),
                    day: selectedDate.date(),
                    options: {
                      day: {
                        type: '<='
                      }
                    }
                  })}
                />
              </MyCard>
            </MyStack>
          </div>
          <div className="page-card-balance">
            <HomeAccountBalance
              initial_date={'1900-01-01'}
              final_date={selectedDate.format('YYYY-MM-DD')}
            />
          </div>
        </div>
      </div>
    </MyLayout>
  );
}
