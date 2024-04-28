interface IProps {
  children: any;
}

export default function MyAccordionPanel(props: IProps) {
  return <div>{props.children}</div>;
}
