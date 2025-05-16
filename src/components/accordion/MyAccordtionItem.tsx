import { CSSProperties, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface IProps {
  title: string;
  children: any;
  defaultOpen?: boolean;
}

export default function MyAccordionItem(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props?.defaultOpen ?? false);
  }, []);

  const style = {
    content: {
      display: isOpen ? "block" : "none",
      marginTop: isOpen ? "10px" : "0px",
    } as CSSProperties,
    titleClassName: `my-mt-10px acci-title ${isOpen ? "my-fw-600" : "my-fw-normal"
      }`,
  };

  const ButtonIcon = () => {
    return isOpen ? (
      <MdKeyboardArrowUp fontSize={16} />
    ) : (
      <MdKeyboardArrowDown fontSize={16} />
    );
  };

  return (
    <div>
      <div className={style.titleClassName} onClick={() => setIsOpen(!isOpen)}>
        <ButtonIcon />
        <span>{props.title}</span>
      </div>
      <div style={style.content}>{props.children}</div>
    </div>
  );
}
