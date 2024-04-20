"use client";

import MyCard from "@/components/card/MyCard";
import MyTopBar from "@/components/menu/topBar/MyTopBar";

export default function Home() {
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
        <MyCard>oi</MyCard>
      </MyCard>
    </div>
  );
}
