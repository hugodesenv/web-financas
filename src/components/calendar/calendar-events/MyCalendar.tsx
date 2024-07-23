"use client";

import MyButton from "@/components/button/myButton/MyButton";
import MySelect from "@/components/select/MySelect";
import { DateUtils } from "@/lib/date.utils";
import { useState } from "react";
import ListDays from "./components/MyCalendarDaysComponent";
import MyCalendarSelectYears from "./components/MyCalendarSelectYears";
import { IEventsDay, dayOfWeekTitle, monthsFromYear } from "./myCalendarUtils";
import "./style.css";

const moment = DateUtils.momentBR();

function TitleColumns() {
  const renderTitle = dayOfWeekTitle.map(({ label }) => <th>{label}</th>);
  return <tr>{renderTitle}</tr>;
}

function OptionsMonth({ onChange, value }: any) {
  return (
    <MySelect onChange={onChange} value={value}>
      {monthsFromYear.map((month: string, index: number) => (
        <option value={index + 1}>{month}</option>
      ))}
    </MySelect>
  );
}

export default function MyCalendar({
  events,
  onItemClick,
  onEventMoved,
}: {
  events: IEventsDay[];
  onItemClick: (data: any) => void;
  onEventMoved: (object: any) => void;
}) {
  const [monthYearSelected, setMonthYearSelected] = useState({
    month: moment.month() + 1,
    year: moment.year(),
  });

  // Alterou o select do mes
  function handleMonthChange(event: any) {
    event.preventDefault();
    setMonthYearSelected((prev) => ({ ...prev, month: event.target.value }));
  }

  // Alterou o select do ano
  function handleYearChange(event: any) {
    event.preventDefault();
    setMonthYearSelected((prev) => ({ ...prev, year: event.target.value }));
  }

  // Movendo o calendario pro dia atual
  function onMoveToCurrentDate() {
    setMonthYearSelected({
      month: moment.month() + 1,
      year: moment.year(),
    });
  }

  /**
   * Evento de arraste e solte dos eventos do dia.
   * São pemitidos soltar o item se estiver dentro da <ul>, ou seja,
   * se for em outra <li>, ou fora da <ul>, nada ocorre.
   * @param event 
   * @returns 
   */
  const handleDrop = (event: any) => {
    event.preventDefault();
    const newColumnID = event.target.parentElement.id || event.target.id;
    if (!newColumnID) {
      return;
    }

    onEventMoved({
      ...JSON.parse(event.dataTransfer.getData("eventMoved")),
      newColumnID
    });
  };

  function handleDragOver(event: any) {
    event.preventDefault();
  }

  return (
    <div>
      <div id="calendar-table-box-options">
        <div>
          <OptionsMonth
            onChange={handleMonthChange}
            value={monthYearSelected.month}
          />
          <MyCalendarSelectYears
            onChange={handleYearChange}
            yearSelected={monthYearSelected.year}
          />
        </div>
        <MyButton onClick={onMoveToCurrentDate}>Hoje</MyButton>
      </div>
      <table className="calendar-table">
        <thead>
          <TitleColumns />
        </thead>
        <tbody onDragOver={handleDragOver} onDrop={handleDrop}>
          <ListDays
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
