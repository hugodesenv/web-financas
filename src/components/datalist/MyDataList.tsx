import { ChangeEvent, useEffect, useRef } from 'react';
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
  onChange: () => Promise<void>;
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
      await onChange();
    }, 2000);
  }

  return (
    <>
      <div className="wrapper-my-input-text">
        {
          title && <label htmlFor={input_id}>{title}</label>
        }
        <input
          className="container-my-input-text"
          list={list_id}
          id={input_id}
          name={input_id}
          onFocus={_handleData}
          onChange={_handleData}
        />
        <datalist id={list_id}>
          {options?.map(({ id, label }) => (
            <option key={id} value={label} />
          ))}
        </datalist>
      </div>
    </>
  );
};

export default MyDataList;
