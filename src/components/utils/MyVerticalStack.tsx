import { CSSProperties } from "react"

interface IProps {
  children: any,
  style?: CSSProperties,
};

const style = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  flexDirection: 'column'
} as CSSProperties;

export default function MyVerticalStack(props: IProps) {
  return (
    <div style={{ ...style, ...props.style }}>
      {props.children}
    </div>
  )
}