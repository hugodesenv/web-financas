import { CSSProperties } from "react";
import MyCircularProgress from "../progress/my_circular_progress/MyCircularProgress";
import "./style.css";

interface IMyButton {
  children: any;
  isLoading?: boolean;
  onClick: (event: any) => void;
  type?: "submit" | "reset" | "button";
  style?: CSSProperties;
  theme?: "light" | "dark";
}

export default function MyButton(props: IMyButton) {
  const btnStyle = {
    static: {
      minWidth: "90px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    className: `container-my-button ${
      props.theme == "dark" ? "my-button-dark" : "my-button-light"
    }`,
  };

  return (
    <button
      {...props}
      style={{ ...btnStyle.static, ...props?.style }}
      className={btnStyle.className}
      disabled={props.isLoading}
    >
      {props.isLoading ? <MyCircularProgress /> : props.children}
    </button>
  );
}
