import { DateUtils } from "@/lib/dateUtils";
import { IElements, IEventsDay, MyCalendarUtils } from "../myCalendarUtils";
import MyCalendarEventsDay from "./MyCalendarEventsDay";
const currentDate = DateUtils.momentBR().format('YYYY-MM-DD');

export default function DaysComponent({
  monthSelected,
  yearSelected,
  events,
  onItemClick,
}: {
  monthSelected: number;
  yearSelected: number;
  events: IEventsDay[];
  onItemClick: (data: any) => void;
}) {
  const weeks = MyCalendarUtils.getCalendarDays({
    dateSelected: {
      month: monthSelected,
      year: yearSelected
    },
    maxSize: 7 * 6,
  });

  function handleItemClick(data: any) {
    onItemClick(data);
  }

  function onDragAllowItem(event: any) {
    event.preventDefault();
  }

  function onDragStartItem(event: any) {
    event.dataTransfer.setData('text', event.target.id);
  }

  const onDragDropItem = (event: any) => {
    event.preventDefault();
    console.log('on dropp', event);
  }

  const days = (weeks: IElements[]) => weeks.map((day: IElements, idx: number) => {
    const outMonth = day.outOfMonth ? "calendar-day-outmonth" : "";
    const currDay = day.date == currentDate ? "calendar-curr-day" : "";
    return (
      <td className={outMonth} key={idx}>
        <span className={currDay}>
          {
            parseInt(day.date.split("-")[2])
          }
        </span>
        <ul className="calendar-events">
          <MyCalendarEventsDay
            date={day.date}
            draggable
            onDragStart={onDragStartItem}
            events={events}
            onClick={handleItemClick}
          />
        </ul>
      </td>
    );
  });

  return weeks.map((weeks: IElements[]) => {
    return (
      <tr onDragOver={onDragAllowItem} onDrop={onDragDropItem}>
        {
          days(weeks)
        }
      </tr>
    );
  });
}
