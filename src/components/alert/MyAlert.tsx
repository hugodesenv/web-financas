import { useEffect, useState } from 'react';
import './style.css';

// Enumerado de tipos
export enum IMyAlertState {
  LOADING,
  NORMAL
}

// Tipagem das propriedades do componente
interface IProps {
  visible: boolean;
  message?: string;
  seconds?: number;
  state?: IMyAlertState,
};

const MyAlert = (props: IProps) => {
  const [visible, setVisible] = useState(false);

  // controle de visibilidade do componente.
  useEffect(() => {
    setVisible(() => props.visible);
  }, [props.visible]);

  // controle do tempo de visibilidade
  useEffect(() => {
    if (visible === true) {
      handleTimeout();
    }
  }, [visible]);

  // cronometro que aguarda X segundos e depois esconde o componente.
  function handleTimeout() {
    if (props.state === IMyAlertState.LOADING) {
      return;
    }

    let visibleSeconds = (props.seconds || 4) * 1000;
    setTimeout(() => {
      setVisible(false);
    }, visibleSeconds);
  }

  return visible && <div className='ma-box'>
    <div className='ma-body'>
      <span>{props.message}</span>
    </div>
  </div>;
};

export default MyAlert;