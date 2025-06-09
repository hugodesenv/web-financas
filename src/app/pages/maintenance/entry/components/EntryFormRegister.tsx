import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import MyPersonDataList from '@/components/datalist/custom/MyPersonDataList';
import { MyPurposeDataList } from '@/components/datalist/custom/MyPurposeDataList';
import { MyForm } from '@/components/form/MyForm';
import MySelect from '@/components/select/MySelect';
import MyInputText from '@/components/text/MyInputText';
import { FaRegSave } from 'react-icons/fa';

export default function EntryFormRegister() {
  return (
    <>
      <MyForm id="entry-form-register">
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
        <MyInputText
          title='Total'
          type='number'
        />
        <MySelect title='Tipo'>
          <option>Normal</option>
          <option>Futuro</option>
        </MySelect>
        <MyInputText
          title='Data de emissão'
          type='date'
        />
        <MyFloattingButton
          attributes={{ type: 'submit' }}
          icon={<FaRegSave size={18} />}
        />
      </MyForm>
    </>
  );
}
