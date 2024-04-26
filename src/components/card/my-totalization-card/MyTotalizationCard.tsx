import { CSSProperties } from 'react';
import './style.css';

interface IProps {
  title: string;
  content: number;
  onClick?: (event: any) => void;
  className?: any;
}

export default function MyTotalizationCard(props: IProps) {
  const dynamicCardStyle = {
    cursor: props.onClick ? 'pointer' : 'default',
    width: 'min-content',
    padding: '10px',
  } as CSSProperties;

  return (
    <div style={dynamicCardStyle} className={props.className}>
      <div className='my-totalization-card' onClick={props.onClick}>
        <span className='my-totalization-title'>{props.title}</span>
        <span className='my-totalization-content'>R${props.content}</span>
      </div>
    </div>
  )
}