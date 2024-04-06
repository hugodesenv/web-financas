"use client";

import { useState } from "react";
import "./style.css";

interface IProps {
  titles: string[];
  children: any[];
}

export function MyTabView(props: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onTitleClick(event: any, idx: number) {
    event.preventDefault();
    setCurrentIndex(idx);
  }

  return (
    <div>
      <ul className="mtv-title">
        {props.titles?.map((caption, idx: number) => (
          <li
            className={currentIndex === idx ? "mtv-title-selected" : ""}
            onClick={(e) => onTitleClick(e, idx)}
          >
            {caption}
          </li>
        ))}
      </ul>
      <ul className="mtv-container">
        <li>{props.children[currentIndex] || <>Undefined</>}</li>
      </ul>
    </div>
  );
}
