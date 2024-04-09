"use client";

import { DateUtils } from "../../lib/dateUtils";

interface IDayOfWeek {
  label: string;
}

interface IElements {
  day: number;
  month: number;
  year: number;
  outOfMonth: boolean;
  children: any[];
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
 * Nessa função, eu preciso saber qual é o dia que estamos, e iniciamos
 * no dia 1. Com isso, obtemos em qual dia da semana o numero 1 se refere,
 * segunda, terça, quarta etc. Com esse indice, eu subtraio do primeiro dia
 * do mês, para obter os dias anteriores a ser mostrado no calendario.
 * A partir daí, eu monto meu objeto resultado, informando o dia.
 * Eu terei 42 espaço (7 dias X 6 semanas).
 */
function getCalendarDays() {
  let dataResult = [] as IElements[];

  let startDate = new Date();
  startDate.setDate(1);

  const currentMonth = startDate.getMonth();
  const indexFirstDayOfMonth = DateUtils.getWeekIndex(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    startDate.getDate()
  );

  startDate.setDate(startDate.getDate() - indexFirstDayOfMonth);

  for (let i = 0; i < MAX_SIZE; i++) {
    const dayObject: IElements = {
      children: [],
      day: startDate.getDate(),
      month: startDate.getMonth() + 1,
      year: startDate.getFullYear(),
      outOfMonth: startDate.getMonth() !== currentMonth,
    };

    dataResult.push(dayObject);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dataResult;
}

function DaysComponent() {
  const daysObject = getCalendarDays();
  return <td>daysObject</td>
}

export default function MyCalendar() {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map(({ label }) => (
            <th>{label}</th>
          ))}
        </tr>
      </thead>
      <DaysComponent />
    </table>
  );
}
