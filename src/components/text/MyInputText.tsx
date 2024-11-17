/**
 * Notas:
 * 1. Foi utilizado a função "forwardRef" em volta do componente para passarmos a propriedade
 * "ref", na qual utilizamos no ...register do React Hook Form. // Hugo 01-04-2024
 */

import { ForwardedRef, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import "./style.css";

interface IMyInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const MyInputText = forwardRef(
  (props: IMyInputText, ref: ForwardedRef<HTMLInputElement>) => {
    const { title, errorText, ...inputProps } = props;
    return (
      <div className="wrapper-my-input-text">
        {title && <label>{title}</label>}
        <input className="container-my-input-text" {...inputProps} ref={ref} />
        {errorText && <span className="my-error-label">{errorText.toString()}</span>}
      </div >
    );
  }
);

export default MyInputText;
