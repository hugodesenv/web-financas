import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import { MyForm } from '@/components/form/MyForm';
import MySelect from '@/components/select/MySelect';
import { MyCustomSelect } from '@/components/select/custom/MyCustomSelect';
import MyInputText from '@/components/text/MyInputText';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { EnEntryMode, EnEntryType, TEntryDefaultValue, TEntry } from '@/type/entryTypes';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa';

export default function EntryFormRegister() {
  const { handleSubmit, setValue, register } = useForm<TEntry>({
    defaultValues: {
      ...TEntryDefaultValue,
      issue_date: dayjs().format("YYYY-MM-DD")
    }
  });

  const onSubmit: SubmitHandler<TEntry> = async (data) => {
    console.log('como ficou ', data);
  }

  return (
    <>
      <MyForm id="entry-form-register" onSubmit={handleSubmit(onSubmit)}>
        <MyHorizontalStack>
          <div style={{ flex: 1 }}>
            <MyCustomSelect
              type='person'
              id='person-register-input'
              title='Pessoa'
              onSelect={(_, { value }) => setValue('person_id', value as number)}
            />
          </div>
          <MyInputText {...register('issue_date')} title='Data de emissão' type='date' />
        </MyHorizontalStack>
        <MyHorizontalStack>
          <MyCustomSelect
            type='bank_account'
            title='Conta bancária'
            id='purpose-register-input'
            onSelect={(_, { value }) => setValue('purpose.id', value as number)}
          />
          <MyCustomSelect
            type='purpose'
            title='Finalidade'
            id='purpose-register-input'
            onSelect={(_, { value }) => setValue('purpose.id', value as number)}
          />
        </MyHorizontalStack>
        <MyHorizontalStack>
          <MySelect title='Modo' onChange={(e) => setValue('mode', e.target.value as EnEntryMode)} >
            <option value={EnEntryMode.CONFIRMED}>Confirmado</option>
            <option value={EnEntryMode.FORECAST}>Previsão</option>
          </MySelect>
          <MySelect title='Tipo' onChange={(e) => setValue('type', e.target.value as EnEntryType)} >
            <option value={EnEntryType.RECEIVABLE}>Receber</option>
            <option value={EnEntryType.PAYABLE}>Pagar</option>
          </MySelect>
        </MyHorizontalStack>
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
