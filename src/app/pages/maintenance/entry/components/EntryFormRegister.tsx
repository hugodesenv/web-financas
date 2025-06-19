import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import MyPersonDataList from '@/components/datalist/custom/MyPersonDataList';
import { MyPurposeDataList } from '@/components/datalist/custom/MyPurposeDataList';
import { MyForm } from '@/components/form/MyForm';
import MySelect from '@/components/select/MySelect';
import MyInputText from '@/components/text/MyInputText';
import MyHorizontalStack from '@/components/utils/MyHorizontalStack';
import { EnEntryMode, EnEntryType, TEntry } from '@/type/entryTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa';

export default function EntryFormRegister() {
  const { handleSubmit, setValue, register } = useForm<TEntry>();

  const onSubmit: SubmitHandler<TEntry> = async (data) => {
    console.log('como ficou ', data);
  }

  return (
    <>
      <MyForm id="entry-form-register" onSubmit={handleSubmit(onSubmit)}>
        <MyPersonDataList
          title='Pessoa'
          input_id="person-register-input"
          list_id="person-register-list"
        />
        <MyPurposeDataList
          title='Finalidade'
          input_id='purpose-register-input'
          list_id='purpose-register-list'
        />
        <MyHorizontalStack>
          <MySelect onChange={(e) => setValue('mode', e.target.value as EnEntryMode)} style={{ flex: 1 }}>
            <option value={EnEntryMode.CONFIRMED}>Confirmado</option>
            <option value={EnEntryMode.FORECAST}>Previsão</option>
          </MySelect>
          <MySelect onChange={(e) => setValue('type', e.target.value as EnEntryType)} style={{ flex: 1 }}>
            <option value={EnEntryType.RECEIVABLE}>Receber</option>
            <option value={EnEntryType.PAYABLE}>Pagar</option>
          </MySelect>
          <MyInputText {...register('issue_date')} title='Data de emissão' type='date' />
        </MyHorizontalStack>
        <MyInputText {...register('total')} title='Total' type='number' style={{ flex: 1 }} />
        <MyFloattingButton
          attributes={{ type: 'submit' }}
          icon={<FaRegSave size={18} />}
        />
      </MyForm>
    </>
  );
}
