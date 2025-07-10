"use client";

import { forwardRef, useEffect, useId, useImperativeHandle, useState } from "react";
import "./style.css";

export interface ITitle {
  caption: string;
}

interface IProps {
  titles: ITitle[];
  children: any[];
}

const MyTabView = forwardRef((props: IProps, ref) => {
  useImperativeHandle(ref, () => {
    return {
      setCurrentIndex,
    }
  })

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
              key={useId()}
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
});

export default MyTabView;