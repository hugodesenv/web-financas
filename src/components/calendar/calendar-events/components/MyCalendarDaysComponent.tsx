import { DateUtils } from "@/lib/dateUtils";
import { IElements, IEventsDay, MyCalendarUtils } from "../myCalendarUtils";
import MyCalendarEventsDay from "./MyCalendarEventsDay";
const currentDate = DateUtils.momentBR().format('YYYY-MM-DD');

export default function DaysComponent({
  monthSelected,
  yearSelected,
  events,
}: {
  monthSelected: number;
  yearSelected: number;
  events: IEventsDay[];
}) {
  const maxSize = 7 * 6; // 7 dias por 6 semanas.
  const weeks = MyCalendarUtils.getCalendarDays({
    dateSelected: { month: monthSelected, year: yearSelected },
    maxSize: maxSize,
  });

  return weeks.map((weeks: IElements[]) => {
    const days = weeks.map((day: IElements, idx: number) => {
      const lookupDay = parseInt(day.date.split("-")[2]);
      const style = {
        outMonth: day.outOfMonth ? "calendar-day-outmonth" : "",
        currDay: day.date == currentDate ? "calendar-curr-day" : "",
      };
      return (
        <td className={style.outMonth} key={idx}>
          <span className={style.currDay}>{lookupDay}</span>
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
