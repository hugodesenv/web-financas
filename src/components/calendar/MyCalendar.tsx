'use client';

import { DateUtils } from '../../lib/dateUtils';

interface IDayOfWeek {
  label: string;
};

const columns: IDayOfWeek[] = [
  { label: 'Dom' },
  { label: 'Seg' },
  { label: 'Ter' },
  { label: 'Qua' },
  { label: 'Qui' },
  { label: 'Sex' },
  { label: 'Sab' },
];

function handleDays() {
  const currentDate = new Date();

  const indexFirstDay = DateUtils.getWeekIndex(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const startDate = new Date();
  console.log(startDate);
}

export default function MyCalendar() {
  handleDays();

  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map(({ label }) => <th>{label}</th>)}
        </tr>
      </thead>
      <tbody>
        {

        }
        <tr>

        </tr>

      </tbody>
    </table>
  )
}