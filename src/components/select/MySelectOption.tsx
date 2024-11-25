import { OptionHTMLAttributes } from "react";
import './style.css';

export interface IMySelectOptionPros extends OptionHTMLAttributes<HTMLOptionElement> { }

const MySelectOption = (props: IMySelectOptionPros) => {


  return (
    <option {...props} className="myoption-wrapper">
      {props.children}
    </option>
  )
};

export default MySelectOption;