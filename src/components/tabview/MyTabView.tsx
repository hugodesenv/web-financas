"use client";

import { useEffect, useState } from "react";
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
  const [pages, setPages] = useState([] as any[]);

  useEffect(() => {
    const pages = props?.children.map((child: any, index: number) => {
      const item_display = index == currentIndex ? 'block' : 'none';
      return <li style={{ display: item_display }}>{child}</li>
    });

    setPages(pages)
  }, [currentIndex])

  function onTitleClick(event: any, idx: number) {
    event.preventDefault();
    setCurrentIndex(idx);
  }

  return (
    <>
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
        {...pages}
      </ul>
    </>
  );
}
