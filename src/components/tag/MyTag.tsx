import { CSSProperties } from "react";

export default function MyTag(props: { children: string; color: string }) {
  const style = {
    border: `1px solid ${props.color}`,
    borderRadius: "8px",
    color: props.color,
    padding: "4px 8px 4px 6px",
  } as CSSProperties;

  return <span style={style}>{props.children}</span>;
}
