import './style.css';

import { SelectHTMLAttributes } from "react";

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> { }

function MySelect(props: IProps) {
  return <>
    <div className="wrapper-my-input-text" style={{ flex: 1 }}>
      {props.title && <label>{props.title}</label>}
      <select {...props} className='my-select'>
        {props.children}
      </select>
    </div >
  </>
}

export default MySelect;