import { TPurpose } from "@/type/purposeTypes";
import { findAllPurposeCase } from "@/use/purpose/purposeFindAllUseCae";
import { useEffect, useState } from "react";
import MyDataList, { IMyDataListOption, IPropsMyDataList } from "../MyDataList";

export const MyPurposeDataList = (props: IPropsMyDataList) => {
  const [purposeList, setPurposeList] = useState([] as IMyDataListOption[]);

  useEffect(() => { handleChange() }, [])

  async function _findAll(): Promise<IMyDataListOption[]> {
    const { data } = await findAllPurposeCase();

    return data?.reduce((prev: IMyDataListOption[], { id, description }: TPurpose) => {
      prev.push({ id: `${id}`, label: description });
      return prev;
    }, []);
  }

  async function handleChange() {
    const res = await _findAll();
    setPurposeList(res);
  }

  return (
    <MyDataList
      input_id={props.input_id}
      title={props.title}
      list_id={props.list_id}
      options={purposeList}
      onChange={async () => await handleChange()}
    />
  )
}