import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import MyPersonDataList from '@/components/datalist/custom/MyPersonDataList';
import { MyForm } from '@/components/form/MyForm';
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
        <MyFloattingButton
          attributes={{ type: 'submit' }}
          icon={<FaRegSave size={18} />}
        />
      </MyForm>
    </>
  );
}
