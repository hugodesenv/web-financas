import { CSSProperties, useState } from "react";
import MyButton from "../button/myButton/MyButton";
import MyStack from "../utils/MyHorizontalStack";
import MyModal from "./MyModal";

export function useMyAsyncModal() {
  const [modal, setModal] = useState<{
    resolve: (value: boolean) => void;
    message: string;
    title: string;
  } | null>(null);

  function showModal(title: string, message: string): Promise<boolean> {
    return new Promise((resolve) => {
      setModal({ message, resolve, title });
    });
  }

  function handleResponse(response: boolean) {
    if (modal) {
      modal.resolve(response);
      setModal(null);
    }
  }

  const MyAsyncModal = () => {
    return (
      <MyModal
        isOpen={modal !== null}
        onClose={() => setModal(null)}
        title={modal?.title ?? ''}
        modalStyle={style.modal}
      >
        <MyStack style={style.stack}>
          <p>{modal?.message}</p>
          <MyStack>
            <MyButton onClick={() => handleResponse(true)}>Confirmar</MyButton>
            <MyButton onClick={() => handleResponse(false)}>Cancelar</MyButton>
          </MyStack>
        </MyStack>
      </MyModal>
    );
  }

  return { MyAsyncModal, showModal }
}

const style = {
  modal: {
    width: '400px',
    height: '220px'
  } as CSSProperties,
  stack: {
    wordBreak: 'break-word',
    flexDirection: 'column',
    padding: '10px',
    height: '165px',
    justifyContent: 'space-between'
  } as CSSProperties,
}