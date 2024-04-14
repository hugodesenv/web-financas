import { IElements, IEventsDay, MyCalendarUtils } from "../myCalendarUtils";
import MyCalendarEventsDay from "./MyCalendarEventsDay";

export default function DaysComponent({
  monthSelected,
  yearSelected,
  events,
}: {
  monthSelected: number;
  yearSelected: number;
  events: IEventsDay[];
}) {
  const maxSize = 7 * 5; // 7 dias por 5 semanas.
  const weeks = MyCalendarUtils.getCalendarDays({
    dateSelected: { month: monthSelected, year: yearSelected },
    maxSize: maxSize,
  });

  return weeks.map((weeks: IElements[]) => {
    const days = weeks.map((day: IElements, idx: number) => {
      const lookupDay = parseInt(day.date.split("-")[2]);
      const dayStyle = day.outOfMonth ? `calendar-day-outmonth` : "";
      return (
        <td className={dayStyle} key={idx}>
          <span>{lookupDay}</span>
          <ul className="calendar-events">
            <MyCalendarEventsDay
              date={day.date}
              events={events}
              onClick={(data: any) => console.log("clicou no item", data)}
            />
          </ul>
        </td>
      );
    });
    return <tr>{days}</tr>;
  });
}
