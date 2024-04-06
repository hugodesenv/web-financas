import { CSSProperties } from "react";
import "./style.css";
import MyCircularProgress from "../progress/my_circular_progress/MyCircularProgress";

interface IMyButton {
  children: string;
  isLoading?: boolean;
  onClick?: (event: any) => void;
  type?: "submit" | "reset" | "button";
  width?: number;
}

export default function MyButton(props: IMyButton) {
  const style = {
    minWidth: "90px",
    paddingLeft: "10px",
    paddingRight: "10px",
  } as CSSProperties;

  return (
    <button
      {...props}
      style={style}
      className="container-my-button"
      disabled={props.isLoading}
    >
      {props.isLoading ? <MyCircularProgress /> : props.children}
    </button>
  );
}
