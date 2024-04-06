import { CSSProperties } from "react";
import "./style.css";

interface IDetail {
  defaultChecked?: boolean;
  label: string;
  value: string;
}

interface IProps {
  attributes: IDetail[];
  onChange: (value: string) => void;
  name: string;
  style?: { direction?: "row" | "column" };
  title?: string;
}

const MyRadioGroup = (props: IProps) => {
  const handleCustomLayout = {
    flexDirection: props.style?.direction,
  } as CSSProperties;

  function handleRadioChange(event: any) {
    props.onChange(event.target.value);
  }

  function RadioTitle() {
    return <div className="mrg-title">{props.title}</div>;
  }

  function RadiosButtons() {
    return (
      <ul style={handleCustomLayout} className="mrg-ul">
        {props.attributes.map(({ defaultChecked, label, value }) => {
          return (
            <li key={value}>
              <input
                defaultChecked={defaultChecked}
                type="radio"
                id={value}
                name={props.name}
                onChange={handleRadioChange}
                value={value}
              />
              <label htmlFor={value}>{label}</label>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      <RadioTitle />
      <RadiosButtons />
    </div>
  );
};

export default MyRadioGroup;
