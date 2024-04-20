import { CSSProperties } from "react";

const styleDefault = {
  borderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  padding: "12px",
  backgroundColor: "white",
} as CSSProperties;

interface IProps {
  children?: any;
  style?: CSSProperties;
}

export default function MyCard(props: IProps) {
  return (
    <div style={{ ...styleDefault, ...props.style }}>{props?.children}</div>
  );
}
