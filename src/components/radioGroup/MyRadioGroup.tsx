import { CSSProperties, useEffect, useState } from 'react';
import './style.css';

interface IDetail {
  label: string;
  value: string;
  id: string;
}

interface IProps {
  attributes: IDetail[];
  valueChecked: string | boolean | undefined;
  onChange: (value: string) => void;
  name: string;
  style?: { direction?: 'row' | 'column' };
  title?: string;
}

const MyRadioGroup = (props: IProps) => {
  const handleCustomLayout = {
    flexDirection: props.style?.direction,
  } as CSSProperties;

  function RadioTitle() {
    return <div className="mrg-title">{props.title}</div>;
  }

  function RadiosButtons() {
    return (
      <ul style={handleCustomLayout} className="mrg-ul">
        {props.attributes.map(({ id, label, value }) => {
          return (
            <li key={id}>
              <input
                checked={value === props.valueChecked?.toString()}
                type="radio"
                id={id}
                name={props.name}
                onChange={(e) => props.onChange(e.target.value)}
                value={value}
              />
              <label htmlFor={id}>{label}</label>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <RadioTitle />
      <RadiosButtons />
    </>
  );
};

export default MyRadioGroup;
