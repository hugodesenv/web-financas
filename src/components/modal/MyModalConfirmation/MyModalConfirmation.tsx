import MyButton from "@/components/button/myButton/MyButton";
import MyModal, { IPropsModal } from "../MyModal";
import './style.css';

interface IPropsModalConfirmation extends IPropsModal {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const MyModalConfirmation = (props: IPropsModalConfirmation) => {
  return (
    <>
      <MyModal {...props}>
        <div>
          {props.message}
        </div>
        <div className="mmc-button-wrapper">
          <MyButton onClick={() => props?.onConfirm()}>Confirmar</MyButton>
          <MyButton onClick={() => props?.onCancel()}>Cancelar</MyButton>
        </div>
      </MyModal>
    </>
  );
};

export default MyModalConfirmation;