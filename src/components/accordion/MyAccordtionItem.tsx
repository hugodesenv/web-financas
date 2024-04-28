import { CSSProperties, useEffect, useId, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MyDivider from "../utils/MyDivider";
import "./style/styleAccordionItem.css";

interface IProps {
  title: string;
  children: any;
  defaultOpen: boolean;
}

export default function MyAccordionItem(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(props.defaultOpen), []);

  const handleClose = (event: any) => setIsOpen(!isOpen);

  const customStyle = {
    content: {
      display: isOpen ? "block" : "none",
      paddingBottom: "10px",
    } as CSSProperties,
  };

  const ButtonIcon = () => {
    return isOpen ? (
      <MdKeyboardArrowUp fontSize={16} />
    ) : (
      <MdKeyboardArrowDown fontSize={16} />
    );
  };

  return (
    <li id={useId()}>
      <div className="acci-title" onClick={handleClose}>
        <ButtonIcon />
        <span>{props.title}</span>
      </div>
      <div style={customStyle.content}>{props.children}</div>
      <MyDivider />
    </li>
  );
}
