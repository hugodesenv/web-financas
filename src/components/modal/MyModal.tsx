import './style.css';

export interface IPropsModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: any;
}

export default function MyModal(props: IPropsModal) {
  const onClose = (_: any) => props.onClose();

  /**
   * Função que permitirá não executar o onClose da div pai, caso o usuario
   * clique na div conteúdo do modal.
   * @param e 
   * @returns 
   */
  const onStopPropagation = (e: any) => e.stopPropagation();

  return props.isOpen &&
    <div className='my-modal' onClick={onClose}>
      <div className='my-modal-body' onClick={onStopPropagation}>
        <div className='my-modal-title'>
          <h4>{props.title}</h4>
          <button onClick={onClose}>X</button>
        </div>
        <div className='my-modal-content'>
          {props.children}
        </div>
      </div>
    </div>;
}