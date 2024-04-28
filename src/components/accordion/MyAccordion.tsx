import "./style/styleAccordion.css";

interface IProps {
  children: any;
}

export default function MyAccordion(props: IProps) {
  return <div className="my-accordion">{props.children}</div>;
}
