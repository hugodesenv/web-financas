import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { useBankAccount } from "@/features/bankAccount/useCaseBankAccount";
import { TPerson } from "@/features/person/personTypes";
import { findAllPersonCase } from "@/features/person/useCase/findAllPersonCase";
import { TPurpose } from "@/features/purpose/purposeTypes";
import { findAllPurposeCase } from "@/features/purpose/useCase/findAllPurposeCase";

interface IConfig {
  onSearch: (filter: Record<string, any>) => Promise<any[]>;
  placeHolder: string;
}

// a custom hook to keep the code organized
export function useSelectConfig() {
  const { findAll } = useBankAccount();

  const config = {
    "bank_account": {
      placeHolder: "Selecione a conta bancária",
      onSearch: async (filter: Record<string, any>) => {
        const { data } = await findAll();

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

  return { config };
}