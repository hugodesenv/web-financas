import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import { MyForm } from '@/components/form/MyForm';
import MySelect from '@/components/select/MySelect';
import { MyCustomSelect } from '@/components/select/custom/MyCustomSelect';
import MyInputText from '@/components/text/MyInputText';
import MyStack from '@/components/utils/MyHorizontalStack';
import { EnEntryMode, EnEntryType, TEntry, TEntryDefaultValue } from '@/features/entry/entryTypes';
import { useCaseEntry } from '@/features/entry/useCaseEntry';
import { IHTTPResponse } from '@/utils/commomTypes';
import { message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa';

const _defaultValue = { ...TEntryDefaultValue, issue_date: dayjs().format("YYYY-MM-DD") }

export default function EntryFormRegister() {
  const { createEntry } = useCaseEntry();
  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, setValue, register, reset } = useForm<TEntry>({
    defaultValues: _defaultValue
  });

  /**
   * Creating entry
   * @param data 
   * @returns 
   */
  const onSubmit: SubmitHandler<TEntry> = async (data) => {
    let response: IHTTPResponse = { success: false };

    if (data.id > 0) {
      console.log("Incluir o modo de alteração aqui.");
    } else {
      response = await createEntry(data);
    }

    if (!response.success) {
      messageApi.open({ content: "Não foi possível incluir o lançamento", type: "error" });
      return;
    }

    messageApi.open({ content: "Cadastro realizado com sucesso", type: "success" });
    populateForm(_defaultValue);
  }

  function populateForm(data: typeof _defaultValue) {
    reset(data);
  }

  return (
    <>
      {contextHolder}
      <MyForm id="entry-form-register" onSubmit={handleSubmit(onSubmit)}>
        <MyStack>
          <div style={{ flex: 1 }}>
            <MyCustomSelect
              type='person'
              id='person-register-input'
              title='Pessoa'
              onSelect={(_, { value }) => setValue('person.id', value as number)}
            />
          </div>
          <MyInputText {...register('issue_date')} title='Data de emissão' type='date' />
        </MyStack>
        <MyStack>
          <MyCustomSelect
            type='bank_account'
            title='Conta bancária'
            id='purpose-register-input'
            onSelect={(_, { value }) => setValue('bankAccount.id', value as number)}
          />
          <MyCustomSelect
            type='purpose'
            title='Finalidade'
            id='purpose-register-input'
            onSelect={(_, { value }) => setValue('purpose.id', value as number)}
          />
        </MyStack>
        <MyStack>
          <MySelect title='Modo' onChange={(e) => {
            setValue('mode', e.target.value as EnEntryMode)
          }} >
            <option value={EnEntryMode.CONFIRMED}>Confirmado</option>
            <option value={EnEntryMode.FORECAST}>Previsão</option>
          </MySelect>
          <MySelect title='Tipo' onChange={(e) => setValue('type', e.target.value as EnEntryType)} >
            <option value={EnEntryType.RECEIVABLE}>Entrada</option>
            <option value={EnEntryType.PAYABLE}>Saída</option>
          </MySelect>
        </MyStack>
        <MyInputText
          {...register('total')}
          title='Total'
          step="0.01"
          type='number'
          style={{ flex: 1 }}
        />
        <TextArea
          id='purpose-register-obs'
          title='Inclua sua anotação aqui'
          placeholder="Anotações..."
          allowClear
          onChange={(e) => setValue('observation', e.target.value)}
        />
        <MyFloattingButton
          attributes={{ type: 'submit' }}
          icon={<FaRegSave size={18} />}
        />
      </MyForm>
    </>
  );
}
