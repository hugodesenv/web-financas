import { TPerson } from "@/features/person/personTypes";
import { findAllPersonCase } from "@/features/person/useCase/findAllPersonCase";
import { Select, SelectProps } from "antd";
import { useState } from "react";
import '../../text/style.css';
import { findAllPurposeCase } from "@/features/purpose/useCase/findAllPurposeCase";
import { TPurpose } from "@/features/purpose/purposeTypes";
import { debounce } from "lodash";
import { findAllBankAccountUseCase } from "@/features/bankAccount/useCase/findAllBankAccountCase";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";

type IProps = SelectProps & {
  type: "person" | "purpose" | "bank_account"
}

interface IConfig {
  onSearch: (filter: Record<string, any>) => Promise<any[]>;
  placeHolder: string;
}

const config = {
  "bank_account": {
    placeHolder: "Selecione a conta bancária",
    onSearch: async (filter: Record<string, any>) => {
      const { data } = await findAllBankAccountUseCase();
      return data?.map((bank: TBankAccount) => {
        return {
          value: bank.id,
          label: bank.description,
          title: bank.description
        }
      });
    }
  } as IConfig,
  "person": {
    placeHolder: "Selecione uma pessoa",
    onSearch: async (filter: Record<string, any>) => {
      const { data } = await findAllPersonCase({ name: filter.name });

      return data?.map((person: TPerson) => {
        return {
          value: person.id,
          label: person.name,
          title: person.nickname
        }
      });
    }
  } as IConfig,
  "purpose": {
    placeHolder: "Selecione a finalidade",
    onSearch: async (_) => {
      const { data } = await findAllPurposeCase();
      return data?.map((purpose: TPurpose) => {
        return {
          value: purpose.id,
          label: purpose.description,
          title: purpose.description
        }
      })
    }
  } as IConfig
}

export const MyCustomSelect = (props: IProps) => {
  const { onSearch, placeHolder } = config[props.type];
  const [options, setOptions] = useState([] as any[]);

  /**
   * Gettting results and converting to component type.
   * I'm using "debounce" for wait some seconds before fetching api.
   * @param value 
   */
  const handleSearch = debounce(async (value) => {
    const options = await onSearch(value);
    console.log('here')
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