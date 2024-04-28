import "./style/styleAccordion.css";

interface IProps {
  children: any;
}

export default function MyAccordion(props: IProps) {
  return <ul className="my-accordion">{props.children}</ul>;
}
