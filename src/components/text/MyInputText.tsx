import './style.css';

interface IMyInputText {
  title: string;
  value?: string;
};

export default function MyInputText(props: IMyInputText) {
  return (
    <div className='wrapper-my-input-text'>
      <span className='my-input-text-title'>{props.title}</span>
      <input className='container-my-input-text' value={props.value} />
    </div>
  )
}