import { CSSProperties } from 'react';
import './style.css';

interface IProps {
  title: string;
  content: number;
  onClick?: (event: any) => void;
  style: {
    fontColor: string;
  },
}

const style = {
  staticCardStyle: {
    width: 'min-content',
    padding: '10px',
  } as CSSProperties,
}

export default function MyTotalizationCard(props: IProps) {
  const dynamicCardStyle = {
    color: props.style.fontColor,
    cursor: props.onClick ? 'pointer' : 'default',
  } as CSSProperties;

  return (
    <div style={{ ...style.staticCardStyle, ...dynamicCardStyle }}>
      <div className='my-totalization-card' onClick={props.onClick}>
        <span className='my-totalization-title'>{props.title}</span>
        <span className='my-totalization-content'>R${props.content}</span>
      </div>
    </div>
  )
}