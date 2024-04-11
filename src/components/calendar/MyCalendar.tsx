"use client";

import { useState } from 'react';
import { IElements, MyCalendarUtils, monthsFromYear } from './myCalendarUtils';
import './style.css';

interface IDayOfWeek {
  label: string;
}

const columns: IDayOfWeek[] = [
  { label: "Dom" },
  { label: "Seg" },
  { label: "Ter" },
  { label: "Qua" },
  { label: "Qui" },
  { label: "Sex" },
  { label: "Sab" },
];

const MAX_SIZE = 7 * 6;

/**
 * Retorna a listagem de TRs e TDs.
 * Se a divisão por 7 não houver resto, quer dizer que deve quebrar a linha, pois já chegou
 * no ultimo dia da semana (sabádo).
 * @returns 
 */
function DaysComponent({ onChange, monthSelected, yearSelected }: {
  onChange: (dayObject: IElements) => void,
  monthSelected: number,
  yearSelected: number,
}) {
  const daysObject = MyCalendarUtils.getCalendarDays({
    dateSelected: { month: monthSelected, year: yearSelected },
    maxSize: MAX_SIZE
  });

  console.log("**********");
  console.log(daysObject);

  const groups = {
    rows: [] as any,
    coll: [] as any
  };

  for (let i = 1; i <= MAX_SIZE; i++) {
    const dayObject = daysObject[i - 1];
    const day = parseInt(dayObject?.date?.split('-')[2]);

    groups.rows.push(
      <td
        className={`calendar-day ${dayObject.outOfMonth && ' calendar-day-outmonth'}`}
        onClick={() => { onChange(dayObject) }}>
        {day}
      </td>
    );

    if (i % 7 === 0) {
      const componentRow = <tr>{...groups.rows}</tr>;
      groups.coll.push(componentRow);
      groups.rows = [];
    }
  }

  return groups.coll;
}

export default function MyCalendar() {
  const [monthSelected, setMonthSelected] = useState(1);

  function handleMonthChange(event: any) {
    setMonthSelected(event.target.value);
  }

  return (
    <div>
      <select onChange={handleMonthChange}>
        {
          monthsFromYear.map((month: string, index: number) => {
            return <option value={index + 1}>{month}</option>;
          })
        }
      </select>
      <table className="calendar-table">
        <thead className="calendar-thead">
          <tr>
            {
              columns.map(({ label }) => (
                <th>{label}</th>
              ))
            }
          </tr>
        </thead>
        <tbody className="calendar-tbody">
          <DaysComponent
            onChange={(dayObject: IElements) => console.log({ 'objectDay': dayObject })}
            monthSelected={monthSelected}
            yearSelected={2024}
          />
        </tbody>
      </table>
    </div>
  );
}
