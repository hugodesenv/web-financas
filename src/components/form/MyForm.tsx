import React from "react";
import "./style.css";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> { }

export const MyForm = React.forwardRef((props: IProps, ref: React.ForwardedRef<HTMLFormElement>) => {
  return (
    <form ref={ref} className="skedol-form" {...props}>
      {props?.children}
    </form>
  )
})