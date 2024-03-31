import './style.css';

interface IMyInputText {
  title: string;
  type?: 'text' | 'date';
  value?: string;
};

export default function MyInputText(props: IMyInputText) {
  return (
    <div className='wrapper-my-input-text'>
      <span className='my-input-text-title'>{props.title}</span>
      <input
        {...props}
        className='container-my-input-text'
      />
    </div>
  )
}