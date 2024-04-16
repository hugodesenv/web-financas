import { LiHTMLAttributes } from "react";
import { IEventsDay } from "../myCalendarUtils";

/**
 * Nesse componente eu recebo um objeto com os dias e a data atual do map.
 * Com isso, faço o filtro pelo dia e obtenho os objetos daquele dia.
 * E aí, monto a listagem e retorno as <li>.
 * @param param0
 * @returns
 */

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
  date: string;
  events: IEventsDay[];
  onClick: (data: any) => void;
}

export default function MyCalendarEventsDay(props: IProps) {
  const { date, events, onClick, ...rest } = props;
  const eventsOfTheDay = events.filter((ev: IEventsDay) => ev.date == date);

  return eventsOfTheDay.map((eventDay: IEventsDay) => {
    const objectWhenClicked = { date, title: eventDay.title, data: eventDay.data };
    const style = { background: eventDay.backgroundColor ?? "blue", };
    return (
      <li {...rest} style={style} onClick={() => onClick(objectWhenClicked)} >
        {eventDay.title}
      </li>
    );
  });
}
