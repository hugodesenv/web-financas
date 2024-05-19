import { ButtonHTMLAttributes, CSSProperties } from "react";
import MyCircularProgress from "../../progress/my_circular_progress/MyCircularProgress";
import "./style.css";

interface IMyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
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
    className: `container-my-button ${props.theme == "dark" ? "my-button-dark" : "my-button-light"}`,
  };

  return (
    <button
      {...props}
      style={{ ...btnStyle.static, ...props?.style }}
      className={btnStyle.className}
      disabled={props.isLoading}
    >
      {props.isLoading ? <MyCircularProgress color="blue" /> : props.children}
    </button>
  );
}
