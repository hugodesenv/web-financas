import { TPerson } from '@/type/personTypes';
import { findAllPersonCase } from '@/use/person/findAll';
import { useState } from 'react';
import MyDataList, { IMyDataListOption, IPropsMyDataList } from '../MyDataList';

export const MyPersonDataList = ({ input_id, list_id, title }: IPropsMyDataList) => {
  const [personList, setPersonList] = useState([] as IMyDataListOption[]);

  /** Buscando as pessoas na API e preparando o objeto conforme o componente espera */
  async function _findAll(): Promise<void> {
    const { data } = await findAllPersonCase();

    const _options = data?.reduce((prev: IMyDataListOption[], { id, name }: TPerson) => {
      prev.push({ id: `${id}`, label: name });
      return prev;
    }, [] as IMyDataListOption[]);

    setPersonList(_options);
  }

  return (
    <MyDataList
      list_id={list_id}
      title={title}
      input_id={input_id}
      onChange={async () => await _findAll()}
      options={personList}
    />
  )
};

export default MyPersonDataList;
