// Hugo Souza - 25/11/2024

import MyButton from "@/components/button/myButton/MyButton";
import MyModal, { IPropsModal } from "../MyModal";
import './style.css';
import { CSSProperties } from "react";

interface IPropsModalConfirmation extends IPropsModal {
  size?: "large" | "middle" | "small" | "micro-small";
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const modalSize = {
  "large": {
    width: '900px',
    height: '500px'
  } as CSSProperties,
  "middle": {
    width: '700px',
    height: '400px'
  } as CSSProperties,
  "small": {
    width: '600px',
    height: '300px'
  } as CSSProperties,
  "micro-small": {
    width: '400px',
    height: '200px'
  }
};

const MyModalConfirmation = (props: IPropsModalConfirmation) => {
  return (
    <>
      <MyModal {...props} modalStyle={modalSize[props.size ?? 'large']}>
        <section className="mmc-wrapper">
          <p>
            {props.message}
          </p>
          <footer>
            <MyButton onClick={() => props?.onConfirm()}>Confirmar</MyButton>
            <MyButton onClick={() => props?.onCancel()}>Cancelar</MyButton>
          </footer>
        </section>
      </MyModal>
    </>
  );
};

export default MyModalConfirmation; 