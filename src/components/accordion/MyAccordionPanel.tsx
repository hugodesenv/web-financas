interface IProps {
  children: any;
}

export default function MyAccordionPanel(props: IProps) {
  return <ul>{props.children}</ul>;
}
