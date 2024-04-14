"use client";

import moment from "moment";
import { useState } from "react";
import DaysComponent from "./components/MyCalendarDaysComponent";
import MyCalendarSelectYears from "./components/MyCalendarSelectYears";
import { IEventsDay, dayOfWeekTitle, monthsFromYear } from "./myCalendarUtils";
import "./style.css";

const WeekTitle = () => (
  <tr>
    {dayOfWeekTitle.map(({ label }) => (
      <th>{label}</th>
    ))}
  </tr>
);

export default function MyCalendar({ events }: { events: IEventsDay[] }) {
  const currentDate = { month: moment().month() + 1, year: moment().year() };
  const [monthYearSelected, setMonthYearSelected] = useState({
    month: currentDate.month,
    year: currentDate.year,
  });

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
      year: currentDate.year,
    });
  }

  function MonthSelect() {
    return (
      <select value={monthYearSelected.month} onChange={handleMonthChange}>
        {monthsFromYear.map((month: string, index: number) => {
          return <option value={index + 1}>{month}</option>;
        })}
      </select>
    );
  }

  return (
    <div>
      <MonthSelect />
      <MyCalendarSelectYears
        onChange={handleYearChange}
        yearSelected={monthYearSelected.year}
      />
      <button onClick={onClickGoToCurrentDate}>Ir para o dia atual</button>
      <table className="calendar-table">
        <thead>
          <WeekTitle />
        </thead>
        <tbody>
          <DaysComponent
            monthSelected={monthYearSelected.month}
            yearSelected={monthYearSelected.year}
            events={events}
          />
        </tbody>
      </table>
    </div>
  );
}
