import './style.css';

import { SelectHTMLAttributes } from "react";

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> { }

function MySelect(props: IProps) {
  return (
    <select className='my-select' {...props}>
      {props.children}
    </select>
  )
}

export default MySelect;