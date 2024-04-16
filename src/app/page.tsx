"use client";

import MyCalendar from "@/components/calendar/calendar-events/MyCalendar";
import MyCard from "@/components/card/MyCard";
import MyDrawer from "@/components/drawer/MyDrawer";
import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { useState } from "react";

const schedulesTest = [
  {
    date: "2024-03-31",
    title: "Dia 31 de março textin",
    backgroundColor: "#288334",
  },
  {
    date: "2024-01-22",
    title: "Dia 22 de janeiro textin",
    backgroundColor: "#288334",
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#288334",
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#393939",
    data: {
      description: "testing",
    },
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#223333",
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#667755",
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#A8A8A8",
  },
  {
    date: "2024-04-05",
    title: "Dia 5 textin",
    backgroundColor: "#223333",
  },
  {
    date: "2024-04-10",
    title: "Dia 10 textin",
    data: {
      description: "testing",
    },
  },
];

export default function Home() {
  const [detailtEvent, setDetailtEvent] = useState({ isOpen: false, data: {} as any });

  function handleEventCalendarClick(data: any) {
    setDetailtEvent({ data, isOpen: true });
  }

  return (
    <div>
      <MyTopBar title="Home" />
      {/** 
      <input list="browsers" name="browser" />
      <datalist id="browsers">
        <option value="Internet Explorer" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
*/}

      <MyCard>
        <MyCard>
          {/** calendário contendo os agendamentos do dia */}
          <MyCalendar
            onItemClick={handleEventCalendarClick}
            events={schedulesTest}
          />
          {/** drawer quando clicamos no evento do dia do calendário */}
          <MyDrawer
            title={detailtEvent.data?.title}
            isOpen={detailtEvent.isOpen}
            onClose={() => setDetailtEvent({ isOpen: false, data: {} })}
          >
            {console.log(detailtEvent?.data)};
            <div>{detailtEvent?.data?.date}</div>
          </MyDrawer>
        </MyCard>
      </MyCard>
    </div>
  );
}
