import "./style.css";
import { FormHTMLAttributes } from "react";

export default function MyForm(props: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form id="skedol-form" {...props}>
      {props?.children}
    </form>
  );
}
