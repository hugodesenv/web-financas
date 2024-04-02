import { CSSProperties } from "react"

const style = {
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
  padding: '12px',
  backgroundColor: 'white'
} as CSSProperties;

export default function MyCard({ children }: any) {
  return <div style={style}>{children}</div>
}