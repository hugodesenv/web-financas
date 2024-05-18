import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { CSSProperties } from "react";
import MyCardBox from "../card/my-card/MyCardBox";
import MyFloattingButton from "../button/myFloattingButton/MyFloattingButton";
import { MdLineWeight } from "react-icons/md";

interface IPropsLayoutRegister {
  title: string;
  children: any;
  optionsFloatting?: any[];
}

const style = {
  children: {
    padding: "8px",
    height: "calc(100vh - 72px)",
  } as CSSProperties,
};

export default function LayoutTopBar(props: IPropsLayoutRegister) {
  return (
    <div>
      <MyTopBar title={props.title} />
      <div style={style.children}>
        <MyCardBox>{props.children}</MyCardBox>
      </div>
      {props.optionsFloatting && <MyFloattingButton icon={MdLineWeight} options={props.optionsFloatting || []} />}
    </div>
  );
}
