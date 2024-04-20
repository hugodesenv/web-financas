'use client';

import MyCalendar from "@/components/calendar/calendar-events/MyCalendar";
import { IEventsDay } from "@/components/calendar/calendar-events/myCalendarUtils";
import MyDrawer from "@/components/drawer/MyDrawer";
import LayoutRegister from "@/components/layout/layout_topbar";
import { useState } from "react";

export default function Schedule() {
  const [events, setEvents] = useState([
    {
      id: "1",
      date: "2024-03-31",
      title: "Dia 31 de março textin",
      backgroundColor: "#288334",
    },
    {
      id: "2",
      date: "2024-01-22",
      title: "Dia 22 de janeiro textin",
      backgroundColor: "#288334",
    },
    {
      id: "3",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#288334",
    },
    {
      id: "4",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#393939",
      data: {
        description: "testing",
      },
    },
    {
      id: "5",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#223333",
    },
    {
      id: "6",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#667755",
    },
    {
      id: "7",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#A8A8A8",
    },
    {
      id: "8",
      date: "2024-04-05",
      title: "Dia 5 textin",
      backgroundColor: "#223333",
    },
    {
      id: "9",
      date: "2024-04-10",
      title: "Dia 10 textin",
      data: {
        description: "testing",
      },
    },
  ] as IEventsDay[]);

  const [detailtEvent, setDetailtEvent] = useState({
    isOpen: false,
    data: {} as any,
  });

  function handleEventCalendarClick(data: any) {
    setDetailtEvent({ data, isOpen: true });
  }

  function handleEventMove(content: any) {
    const newEvents = events.map((event: IEventsDay) => {
      if (event.id == content?.elementID) {
        return { ...event, date: content.newColumnID }
      }
      return event;
    });

    setEvents(newEvents);
  }

  return (
    <LayoutRegister title="Agenda">
      {/** calendário contendo os agendamentos do dia */}
      <MyCalendar
        onItemClick={handleEventCalendarClick}
        events={events}
        onEventMoved={handleEventMove}
      />
      {/** drawer quando clicamos no evento do dia do calendário */}
      <MyDrawer
        title={detailtEvent.data?.title}
        isOpen={detailtEvent.isOpen}
        onClose={() => setDetailtEvent({ isOpen: false, data: {} })}
      >
        <div>{detailtEvent?.data?.date}</div>
      </MyDrawer>
    </LayoutRegister>
  )
}