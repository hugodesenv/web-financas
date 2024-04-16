"use client";

import { useState } from "react";
import DaysComponent from "./components/MyCalendarDaysComponent";
import MyCalendarSelectYears from "./components/MyCalendarSelectYears";
import { IEventsDay, dayOfWeekTitle, monthsFromYear } from "./myCalendarUtils";
import "./style.css";
import { DateUtils } from "@/lib/dateUtils";
import MySelect from "@/components/select/MySelect";
import MyButton from "@/components/button/MyButton";
const moment = DateUtils.momentBR();

const WeekTitle = () => (
  <tr>
    {dayOfWeekTitle.map(({ label }) => (
      <th>{label}</th>
    ))}
  </tr>
);

export default function MyCalendar({ events, onItemClick }: {
  events: IEventsDay[],
  onItemClick: (data: any) => void
}) {
  const currentDate = {
    month: moment.month() + 1,
    year: moment.year()
  };
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
      <MySelect
        onChange={handleMonthChange}
        value={monthYearSelected.month}
      >
        {
          monthsFromYear.map((month: string, index: number) => {
            return <option value={index + 1}>{month}</option>;
          })
        }
      </MySelect>
    )
  }

  return (
    <div>
      <div id="calendar-table-box-options">
        <div>
          <MonthSelect />
          <MyCalendarSelectYears
            onChange={handleYearChange}
            yearSelected={monthYearSelected.year}
          />
        </div>
        <MyButton onClick={onClickGoToCurrentDate}>Hoje</MyButton>
      </div>
      <table className="calendar-table">
        <thead>
          <WeekTitle />
        </thead>
        <tbody>
          <DaysComponent
            monthSelected={monthYearSelected.month}
            yearSelected={monthYearSelected.year}
            events={events}
            onItemClick={onItemClick}
          />
        </tbody>
      </table>
    </div>
  );
}
