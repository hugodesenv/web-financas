import { TPerson } from '@/type/personTypes';
import { findAllPersonCase } from '@/use/person/findAll';
import { useEffect, useState } from 'react';
import MyDataList, { IMyDataListOption, IPropsMyDataList } from '../MyDataList';

export const MyPersonDataList = ({ input_id, list_id, title }: IPropsMyDataList) => {
  const [personList, setPersonList] = useState([] as IMyDataListOption[]);

  useEffect(() => { handleChange() }, []);

  /** Buscando as pessoas na API e preparando o objeto conforme o componente espera */
  async function _findAll(): Promise<IMyDataListOption[]> {
    const { data } = await findAllPersonCase();

    // Convertendo o retorno no formato que o componente espera.
    return data?.reduce((prev: IMyDataListOption[], { id, name: label }: TPerson) => {
      prev.push({ id: `${id}`, label });
      return prev;
    }, []);
  }

  async function handleChange() {
    const list = await _findAll();
    setPersonList(list);
  }

  return (
    <MyDataList
      list_id={list_id}
      title={title}
      input_id={input_id}
      onChange={async () => await handleChange()}
      options={personList}
    />
  )
};

export default MyPersonDataList;
