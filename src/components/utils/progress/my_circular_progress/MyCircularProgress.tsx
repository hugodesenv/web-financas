import './style.css';

interface IMyCircularProgress {
  color?: string;
  size?: number;
}

export default function MyCircularProgress(props: IMyCircularProgress) {
  const size = props?.size || 20;
  return <div className='my-circular-progress-container'
    style={{
      borderColor: props?.color || 'white',
      width: size,
      height: size,
    }}
  />
}