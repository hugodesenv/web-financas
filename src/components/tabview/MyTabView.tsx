"use client";

import { useState } from "react";
import "./style.css";

interface ITitle {
  caption: string;
}

interface IProps {
  titles: ITitle[];
  children: any[];
}

export function MyTabView(props: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onTitleClick(event: any, idx: number) {
    event.preventDefault();
    setCurrentIndex(idx);
  }

  function Items() {
    const items = props?.children.map((value: any, index: number) => {
      const item_display = index == currentIndex ? 'block' : 'none';
      return <li style={{ display: item_display }}>{value}</li>
    });

    return items;
  }

  return (
    <div>
      <ul className="mtv-title">
        {
          props.titles?.map((title, idx: number) => (
            <li
              className={currentIndex === idx ? "mtv-title-selected" : ""}
              onClick={(e) => onTitleClick(e, idx)}>
              {title.caption}
            </li>
          ))
        }
      </ul>
      <ul className="mtv-container">
        <Items />
      </ul>
    </div>
  );
}
