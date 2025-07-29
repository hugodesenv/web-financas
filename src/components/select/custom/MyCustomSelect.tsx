import { Select, SelectProps } from "antd";
import { debounce } from "lodash";
import { useState } from "react";
import '../../text/style.css';
import { useSelectConfig } from "./useSelectConfig";

type IProps = SelectProps & {
  type: "person" | "purpose" | "bank_account"
}

// final component
export const MyCustomSelect = (props: IProps) => {
  const [options, setOptions] = useState([] as any[]);
  const { config } = useSelectConfig();
  const { onSearch, placeHolder } = config[props.type];

  /**
   * Gettting results and converting to component type.
   * I'm using "debounce" for wait some seconds before fetching api.
   * @param value 
   */
  const handleSearch = debounce(async (value) => {
    const options = await onSearch(value);
    setOptions(options);
  }, 700); // 700ms debounce

  async function handleOnFocus() {
    if (options.length == 0) {
      handleSearch("");
    }
  }

  return <>
    <div className="wrapper-my-input-text" style={{ flex: 1 }}>
      {props.title && <label>{props.title}</label>}
      <Select
        {...props}
        showSearch
        placeholder={placeHolder}
        optionFilterProp="label"
        onChange={props.onChange}
        onSearch={(value) => handleSearch(value)}
        onFocus={() => handleOnFocus()}
        options={options}
      />
    </div>
  </>
}