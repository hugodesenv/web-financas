/**
 * Notas:
 * 1. Foi utilizado a função "forwardRef" em volta do componente para passarmos a propriedade
 * "ref", na qual utilizamos no ...register do React Hook Form. // Hugo 01-04-2024
 */

import { ForwardedRef, forwardRef } from "react";
import "./style.css";

interface IMyInputText extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const MyInputText = forwardRef(
  (props: IMyInputText, ref: ForwardedRef<HTMLInputElement>) => {
    const { title, ...inputProps } = props;
    return (
      <div className="wrapper-my-input-text">
        <label className="my-input-text-title">{title}</label>
        <input className="container-my-input-text" {...inputProps} ref={ref} />
      </div>
    );
  }
);

export default MyInputText;
