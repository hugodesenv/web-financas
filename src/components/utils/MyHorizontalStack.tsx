import { CSSProperties } from "react";

interface IProps {
  children: any,
  style?: CSSProperties,
};

const style = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap'
} as CSSProperties;

export default function MyStack(props: IProps) {
  return (
    <div style={{ ...style, ...props.style }}>
      {props.children}
    </div>
  )
}