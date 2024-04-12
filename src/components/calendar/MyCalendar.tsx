"use client";

import { useState } from 'react';
import { IElements, MyCalendarUtils, monthsFromYear } from './myCalendarUtils';
import './style.css';
import moment from 'moment';

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

const MAX_SIZE = 7 * 5; // 7 dias por 5 semanas.

const currentDate = {
  month: moment().month() + 1,
  year: moment().year()
};

/**
 * Retorna a listagem de TRs e TDs.
 * Se a divisão por 7 não houver resto, quer dizer que deve quebrar a linha, pois já chegou
 * no ultimo dia da semana (sabádo).
 * @returns 
 */
function DaysComponent({ onClick, monthSelected, yearSelected }: {
  onClick: (dayObject: IElements) => void,
  monthSelected: number,
  yearSelected: number,
}) {
  const daysObject = MyCalendarUtils.getCalendarDays({
    dateSelected: { month: monthSelected, year: yearSelected },
    maxSize: MAX_SIZE
  });

  return daysObject.map((weeks: IElements[]) => {
    const componentDay = weeks.map((day: IElements, idx: number) => {
      const lookupDay = parseInt(day.date.split('-')[2]);
      const className = `calendar-day ${day.outOfMonth && 'calendar-day-outmonth'}`;
      const rowClick = () => onClick(day);
      return <td key={idx} onClick={rowClick} className={className}>{lookupDay}</td>;
    });
    return <tr>{componentDay}</tr>;
  });
}

function SelectYears({ onChange, yearSelected }: {
  onChange: (event: any) => void,
  yearSelected: number,
}) {
  const fistYear = yearSelected - 100;
  const months = Array.from({ length: 150 }, (_, i) => fistYear + i);
  return (
    <select value={yearSelected} onChange={onChange}>
      {months.map((year: number) => <option key={year}>{year}</option>)}
    </select>
  );
}

function CalendarTitles() {
  return (
    <tr>
      {columns.map(({ label }) => <th>{label}</th>)}
    </tr>
  );
}

export default function MyCalendar({ onClick }: {
  onClick: (dayObject: IElements) => void
}) {
  const [monthYearSelected, setMonthYearSelected] = useState({
    month: currentDate.month,
    year: currentDate.year,
  })

  function handleMonthChange(event: any) {
    event.preventDefault();
    setMonthYearSelected((prev) => ({ ...prev, month: event.target.value }));
  }

  function handleYearChange(event: any) {
    event.preventDefault();
    setMonthYearSelected((prev) => ({ ...prev, year: event.target.value }));
  }

  function onClickGoToCurrentDate() {
    setMonthYearSelected({
      month: currentDate.month,
      year: currentDate.year
    });
  }

  function MonthSelect() {
    return <select value={monthYearSelected.month} onChange={handleMonthChange}>
      {
        monthsFromYear.map((month: string, index: number) => {
          return <option value={index + 1}>{month}</option>;
        })
      }
    </select>;
  }

  return (
    <div>
      <MonthSelect /> <br />
      <SelectYears
        onChange={handleYearChange}
        yearSelected={monthYearSelected.year}
      /><br />
      <button onClick={onClickGoToCurrentDate}>Ir para o dia atual</button>
      <table className="calendar-table">
        <thead className="calendar-thead">
          <CalendarTitles />
        </thead>
        <tbody className="calendar-tbody">
          <DaysComponent
            onClick={onClick}
            monthSelected={monthYearSelected.month}
            yearSelected={monthYearSelected.year}
          />
        </tbody>
      </table>
    </div>
  );
}
