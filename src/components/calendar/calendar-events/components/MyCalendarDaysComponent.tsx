import { DateUtils } from "@/lib/date.utils";
import { IElements, IEventsDay, MyCalendarUtils } from "../myCalendarUtils";
import MyCalendarEventsDay from "./MyCalendarEventsDay";
const currentDate = DateUtils.momentBR().format("YYYY-MM-DD");

export default function ListDays({
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
  // Quando o usuario move o compromisso para outro dia, guardamos seu ID.
  function handleEventStart(event: any, oldColumnID: string) {
    const target = event.target as HTMLDivElement;
    const objectTransfer = {
      elementID: target.id,
      oldColumnID,
    };
    event.dataTransfer.setData("eventMoved", JSON.stringify(objectTransfer));
  }

  // Estilização dos componentes
  function handleDayStyle(day: IElements) {
    return {
      classNameOutOfMonth: day.outOfMonth ? "calendar-day-outmonth" : "",
      classNameCurrentDay: day.date == currentDate ? "calendar-curr-day" : "",
      lookupDay: parseInt(day.date.split("-")[2]),
    };
  }

  // Obtemos a matriz de semanas com seus respecitivos dias.
  const weeksMonth = MyCalendarUtils.getCalendarDays({
    dateSelected: {
      month: monthSelected,
      year: yearSelected,
    },
    maxSize: 7 * 6,
  });

  // Rederizamos os dias da semana em forma de componente TD.
  // Passamos o ID para a <ul> por causa do controle do "Drag and Drop", assim,
  // conseguimos identificar para onde foi arrastado e mudar o posicionamento.
  const renderDays = (weeks: IElements[]) =>
    weeks.map((elementDay: IElements, idx: number) => {
      const style = handleDayStyle(elementDay);
      return (
        <td className={style.classNameOutOfMonth} key={idx}>
          <span className={style.classNameCurrentDay}>{style.lookupDay}</span>
          <ul id={elementDay.date} className="calendar-events">
            <MyCalendarEventsDay
              date={elementDay.date}
              draggable
              onDragStart={(ev) => handleEventStart(ev, elementDay.date)}
              events={events}
              onClick={(data) => onItemClick(data)}
            />
          </ul>
        </td>
      );
    });

  // Para cada semana rederizada, inputamos em um Tr.
  const renderWeeks = weeksMonth.map((weeks: IElements[]) => {
    return <tr>{renderDays(weeks)}</tr>;
  });

  return renderWeeks;
}
