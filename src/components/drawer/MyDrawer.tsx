import './style.css';

interface IProps {
  children?: any,
  isOpen: boolean,
  onClose: () => void,
  title?: string,
  width?: any,
}

export default function MyDrawer(props: IProps) {
  function handleClose(e: any) {
    e.preventDefault();
    if (e.target.id === 'mydrawer-background' || e.target.id === 'mydrawer-button-close') {
      props.onClose();
    }
  };

  return props.isOpen && (
    <div id="mydrawer-background" onClick={handleClose}>
      <div className='mydrawer-content-box mydrawer-content-open'>
        <div className='mydrawer-header'>
          <h3>{props.title}</h3>
          <button id='mydrawer-button-close' onClick={handleClose}>Fechar</button>
        </div>
        <div className='mydrawer-body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}