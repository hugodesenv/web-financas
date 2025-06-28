import { TPerson } from "@/type/personTypes";
import { findAllPersonCase } from "@/use/person/findAll";
import { Select, SelectProps } from "antd";
import { useState } from "react";
import '../../text/style.css';

type IProps = SelectProps & {}

export const MyPersonSelect = (props: IProps) => {
  const [options, setOptions] = useState([] as any[]);

  /**
   * Gettting person results and converting to component type.
   * @param name 
   */
  async function handleSearch(name: string) {
    const { data } = await findAllPersonCase({ name: name });

    let conversion = data?.map((person: TPerson) => {
      return {
        value: person.id,
        label: person.name,
        title: person.nickname
      }
    });

    setOptions(() => conversion);
  }

  return <>
    <div className="wrapper-my-input-text">
      {props.title && <label>{props.title}</label>}
      <Select
        {...props}
        showSearch
        placeholder="Selecione uma pessoa"
        optionFilterProp="label"
        onChange={props.onChange}
        onSearch={(value) => handleSearch(value)}
        options={options}
      />
    </div>
  </>
}