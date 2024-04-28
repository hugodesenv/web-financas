"use client";

import { MdDehaze } from "react-icons/md";
import "./style.css";
import MyDrawer from "@/components/drawer/MyDrawer";
import { useState } from "react";

interface IProps {
  children?: any;
  title?: {
    caption: string;
    options?: {
      caption: string;
      children: any;
    };
  };
}

export default function MyCardBox(props: IProps) {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  /**
   * Componente do hamburger que fica ao lado do titulo
   * @returns
   */
  const OptionsTitle = () => {
    const _onOptionsClick = (event: any) => setIsOptionOpen(true);
    let buttonOptions = null;

    if (props?.title?.options) {
      buttonOptions = (
        <button onClick={_onOptionsClick}>
          <MdDehaze size={16} />
        </button>
      );
    }
    return buttonOptions;
  };

  /**
   * Componente do titulo,
   * contendo a descriçao e o botao de opçoes (Se tiver)
   * @returns
   */
  const TitleBox = () => {
    if (props.title) {
      return (
        <div className="mycard-boxtitle">
          <span className="mycard-title">{props.title.caption}</span>
          <OptionsTitle />
        </div>
      );
    }
    return null;
  };

  /**
   * Drawer que é aberto quando clicamos no botao do hamburger
   * dentro do titulo
   * @returns
   */
  const DrawerOptions = () => {
    return (
      <MyDrawer
        title={props.title?.options?.caption ?? ""}
        isOpen={isOptionOpen}
        onClose={() => setIsOptionOpen(!isOptionOpen)}
      >
        {props.title?.options?.children}
      </MyDrawer>
    );
  };

  return (
    <div className="mycard-default">
      <TitleBox />
      <div>{props?.children}</div>
      <DrawerOptions />
    </div>
  );
}
