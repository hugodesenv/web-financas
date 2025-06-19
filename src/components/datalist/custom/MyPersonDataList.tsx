import { TPerson } from '@/type/personTypes';
import { findAllPersonCase } from '@/use/person/findAll';
import { useState } from 'react';
import MyDataList, { IMyDataListOption, IPropsMyDataList } from '../MyDataList';

export const MyPersonDataList = ({ input_id, list_id, title }: IPropsMyDataList) => {
  const [personList, setPersonList] = useState([] as IMyDataListOption[]);

  /** Buscando as pessoas na API e preparando o objeto conforme o componente espera */
  async function _findAll(personName: string): Promise<IMyDataListOption[]> {
    const filter = { name: personName, limit: 5 }
    const { data } = await findAllPersonCase(filter);

    // Convertendo o retorno no formato que o componente espera.
    return data?.reduce((prev: IMyDataListOption[], { id, name: label }: TPerson) => {
      prev.push({ id: `${id}`, label });
      return prev;
    }, []);
  }

  async function handleChange(personName: string) {
    const personList = await _findAll(personName);
    setPersonList(personList);
  }

  return (
    <MyDataList
      list_id={list_id}
      title={title}
      input_id={input_id}
      onChange={async (text: string) => await handleChange(text)}
      options={personList}
    />
  )
};

export default MyPersonDataList;
