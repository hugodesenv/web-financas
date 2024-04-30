import { CSSProperties } from "react";
import MyCircularProgress from "../progress/my_circular_progress/MyCircularProgress";
import "./style.css";

interface IMyButton {
  children: any;
  isLoading?: boolean;
  onClick: (event: any) => void;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
}

export default function MyButton(props: IMyButton) {
  const fixedStyle = {
    minWidth: "90px",
    paddingLeft: "10px",
    paddingRight: "10px",
  } as CSSProperties;

  return (
    <button
      {...props}
      style={{ ...fixedStyle, ...props?.style }}
      className="container-my-button"
      disabled={props.isLoading}
    >
      {props.isLoading ? <MyCircularProgress /> : props.children}
    </button>
  );
}
