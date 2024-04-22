import { CSSProperties } from "react";

const staticStyle = {
  styleDefault: {
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    padding: "12px",
    backgroundColor: "white",
  } as CSSProperties,
  titleStyle: {
    fontWeight: 600,
    fontSize: '11px',
    marginBottom: '12px',
  } as CSSProperties,
}

interface IProps {
  children?: any;
  style?: CSSProperties;
  title?: string;
}

export default function MyCardBox(props: IProps) {
  return (
    <div style={{ ...staticStyle.styleDefault, ...props.style }}>
      {
        props.title && <div style={staticStyle.titleStyle}>{props.title}</div>
      }
      <div>{props?.children}</div>
    </div>
  );
}
