import './style.css';

interface IMyCircularProgress {
  color: string;
  size?: number;
}

export default function MyCircularProgress(props: IMyCircularProgress) {
  const size = props?.size || 16;
  return <div className='my-circular-progress-container'
    style={{
      borderColor: props.color,
      width: size,
      height: size,
    }}
  />
}