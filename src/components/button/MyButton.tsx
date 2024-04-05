import { CSSProperties } from 'react';
import './style.css';
import MyCircularProgress from '../progress/my_circular_progress/MyCircularProgress';

interface IMyButton {
  children: string;
  isLoading?: boolean;
  onClick?: (event: any) => void;
  type?: "submit" | "reset" | "button",
  width?: number;
};

export default function MyButton(props: IMyButton) {
  const style = {
    width: props?.width ?? 100,
  } as CSSProperties;

  return (
    <button
      {...props}
      className='container-my-button'
      disabled={props.isLoading}
      onClick={() => console.log('oi')}
      style={style}
    >
      {
        props.isLoading
          ? <MyCircularProgress />
          : props.children
      }
    </button>
  )
}