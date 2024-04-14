"use client";

import MyCalendar from "@/components/calendar/calendar-events/MyCalendar";
import { IElements } from "@/components/calendar/calendar-events/myCalendarUtils";
import MyCard from "@/components/card/MyCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";

export default function Home() {
  return (
    <div>
      <MyTopBar title="Home" />
      <MyCard>
        <MyCalendar
          events={[
            {
              date: "2024-03-31",
              title: "Dia 5 textin",
              backgroundColor: "#288334",
            },
            {
              date: "2024-01-22",
              title: "Dia 5 textin",
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
          ]}
        />
        <div
          draggable
          onDragStart={(e) => {
            console.log("drag", e);
          }}
        >
          eai mano
        </div>
      </MyCard>
    </div>
  );
}
