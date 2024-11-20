import { useEffect, useState } from 'react';
import './style.css';

export interface IMyAlert {
  message: string,
  timeout?: number
  disableTimeout?: boolean,
  key?: any
}

const MyAlert = (props: IMyAlert) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.message?.length > 0) {
      setShow(true);
    }

    if (props.disableTimeout !== true) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, props.timeout ?? 4000)

      return () => clearTimeout(timeout);
    }
  }, [props.message, props.key])

  return show && (
    <div className='ma-box'>
      <div className='ma-body'>
        <span>{props.message}</span>
      </div>
    </div>
  )
};

export default MyAlert;