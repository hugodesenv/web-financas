import { ChangeEvent, DOMAttributes, MouseEventHandler, SyntheticEvent, useRef } from 'react';
import MyInputText from '../text/MyInputText';
import '../text/style.css';

export interface IMyDataListOption {
  id: string;
  label: string;
}

export interface IPropsMyDataList {
  title?: string;
  list_id: string;
  input_id: string;
}

interface IProps extends IPropsMyDataList {
  options: IMyDataListOption[];
  onChange: (input: string) => Promise<void>;
}

const MyDataList = ({ options, title, input_id, list_id, onChange }: IProps) => {
  const timeoutRef = useRef<any>(null);

  /**
   * Pra não ficar carregando toda hora a API conforme o usuário for digitando,
   * eu incluí esse intervalo. Conforme eu vou digitando, eu cancelo o Delay anterior e preparo um novo timer de 2 segundos.
   * Como o componente vai ter rederizações, eu criei esse timeoutRef que manterá o valor sem sofrer prejudicações.
   * @param event
   */
  async function _handleData(event?: ChangeEvent<HTMLInputElement>) {
    event?.preventDefault();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      await onChange(event?.target.value ?? "");
    }, 2000);
  }

  return (
    <>
      <div className="wrapper-my-input-text">
        {
          title && <label htmlFor={input_id}>{title}</label>
        }
        <MyInputText
          className="container-my-input-text"
          list={list_id}
          id={input_id}
          name={input_id}
          //onFocus={_handleData}
          onChange={_handleData}
          title=''
          autoComplete="off"
        />

        <datalist id={list_id} >
          {options?.map(({ id, label }) => (
            <option key={id} value={label} />
          ))}
        </datalist>
      </div >
    </>
  );
};

export default MyDataList;

//==> Preciso pegar do Texto o ID.