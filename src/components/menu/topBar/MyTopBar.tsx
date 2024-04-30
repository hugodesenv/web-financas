import { CSSProperties } from "react";

interface IProps {
  title: string;
  children?: any;
}

function MyTopBar(props: IProps) {
  return (
    <div style={style.title_container}>
      <h4 style={style.title}>{props.title}</h4>
      {
        props?.children &&
        <div style={style.containerChildren}>{props?.children}</div>
      }
    </div>
  );
}

const style = {
  title_container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottom: "2px solid #EFEFEF",
    display: "flex",
    minHeight: '46px',
    justifyContent: "space-between",
    width: "100%",
  } as CSSProperties,
  title: {
    paddingLeft: "14px",
    userSelect: "none",
  } as CSSProperties,
  containerChildren: {
    display: "flex",
    flexWrap: "wrap",
    gap: '10px',
    justifyContent: "end",
    marginRight: '10px',
  } as CSSProperties,
};

export default MyTopBar;
