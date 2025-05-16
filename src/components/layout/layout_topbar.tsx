import MyTopBar from "@/components/menu/topBar/MyTopBar";
import { CSSProperties } from "react";
import MyCardBox from "../card/my-card/MyCardBox";
import MyFloattingButton from "../button/myFloattingButton/MyFloattingButton";
import { MdLineWeight } from "react-icons/md";

interface IPropsLayoutRegister {
  title: string;
  children: any;
  // componente que podemos definir antes do children principal.
  // por exemplo: botões de incluir/alterar [...] em telas de cadastros.
  childrenBefore?: any;
  optionsFloatting?: any[];
}

const style = {
  children: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: "8px",
    height: "calc(100vh - 72px)",
  } as CSSProperties,
};

export default function LayoutTopBar(props: IPropsLayoutRegister) {
  return (
    <div>
      <MyTopBar title={props.title} />
      <div style={style.children}>
        {
          props.childrenBefore && (
            <MyCardBox >
              {props.childrenBefore}
            </MyCardBox>
          )
        }
        <MyCardBox>{props.children}</MyCardBox>
      </div>
      {
        props.optionsFloatting && <MyFloattingButton
          attributes={{}}
          icon={MdLineWeight}
          options={props.optionsFloatting || []}
        />
      }
    </div>
  );
}
