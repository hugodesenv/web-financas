'use client';

import MyCalendar from "@/components/calendar/MyCalendar";
import MyCard from "@/components/card/MyCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";

export default function Home() {
  return <div>
    <MyTopBar title='Home' />
    <MyCard>
      <MyCalendar />
      <div
        draggable
        onDragStart={(e) => { console.log('drag', e) }}>eai mano</div>
      
    </MyCard>
  </div>
}
