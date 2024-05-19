import { FormHTMLAttributes, MutableRefObject } from "react";
import "./style.css";

interface IProps extends FormHTMLAttributes<HTMLFormElement> { }

export default function MyForm(props: IProps) {
  return (
    <form id="skedol-form" {...props}>
      {props?.children}
    </form>
  );
}
