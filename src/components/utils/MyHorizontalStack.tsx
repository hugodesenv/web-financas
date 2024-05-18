import { CSSProperties } from "react"

interface IProps {
  children: any,
  style?: CSSProperties,
};

const style = {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
} as CSSProperties;

export default function MyHorizontalStack(props: IProps) {
  return (
    <div style={{ ...style, ...props.style }}>
      {props.children}
    </div>
  )
}