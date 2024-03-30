import MyCircularProgress from '../utils/progress/my_circular_progress/MyCircularProgress';
import './style.css';

interface IMyButton {
  children: string;
}

export default function MyButton(props: IMyButton) {
  return (
    <button className='container-my-button'>
      <MyCircularProgress />
    </button>
  )
}