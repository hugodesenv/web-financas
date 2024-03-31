import MyCircularProgress from '../utils/progress/my_circular_progress/MyCircularProgress';
import './style.css';

interface IMyButton {
  children: string;
  isLoading?: boolean;
  onClick: (event: any) => void;
  width?: number;
}

export default function MyButton(props: IMyButton) {
  const style = {
    width: props?.width ?? 100
  };

  return (
    <button
      {...props}
      className='container-my-button'
      disabled={props.isLoading}
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