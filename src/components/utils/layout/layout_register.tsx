import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { CSSProperties } from "react";

interface IPropsLayoutRegister {
  title: string;
  children: any;
}

const style = {
  children: {
    padding: '14px',
  } as CSSProperties,
}

export default function LayoutRegister(props: IPropsLayoutRegister) {
  return <div>
    <MyTopBar title={props.title} />
    <div style={style.children}>
      {props.children}
    </div>
  </div>
}