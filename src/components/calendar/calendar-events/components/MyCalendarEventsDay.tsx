import { CSSProperties } from "react";
import { IEventsDay } from "../myCalendarUtils";

/**
 * Nesse componente eu recebo um objeto com os dias e a data atual do map.
 * Com isso, faço o filtro pelo dia e obtenho os objetos daquele dia.
 * E aí, monto a listagem e retorno as <li>.
 * @param param0
 * @returns
 */
export default function MyCalendarEventsDay({
  date,
  events,
  onClick,
}: {
  date: string;
  events: IEventsDay[];
  onClick: (data: any) => void;
}) {
  const eventsOfTheDay = events.filter((ev: IEventsDay) => ev.date == date);
  return eventsOfTheDay.map((eventDay: IEventsDay) => {
    const objectWhenClicked = { date, title: eventDay.title, data: eventDay.data };
    const style = {
      background: eventDay.backgroundColor ?? "blue",
    } as CSSProperties;
    return (
      <li style={style} onClick={() => onClick(objectWhenClicked)}>
        {eventDay.title}
      </li>
    );
  });
}
