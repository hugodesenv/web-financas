// Tela circulada pelo forwardRef pra podermos utilizar por referencia alguns evnetos
// diretamente na classe pai. Expomos esses eventos no hook useImperativeHandle
// Observação: Hoje dia 20/11/2024 o Brasil empatou com o Uruguai por 1x1
// e outra coisa... Eu estou anotando isso hoje devido meu nivel de programação, futuramente remover
// todos esse comentarios de iniciante.
'use client';

import MyAlert from '@/components/alert/MyAlert';
import { useMyAlert } from '@/components/alert/hook';
import MyFloattingButton from '@/components/button/myFloattingButton/MyFloattingButton';
import MyCardBox from '@/components/card/my-card/MyCardBox';
import { MyForm } from '@/components/form/MyForm';
import MyRadioGroup from '@/components/radioGroup/MyRadioGroup';
import MyInputText from '@/components/text/MyInputText';
import { PersonType, TPerson, TPersonDefaultValues } from '@/features/person/personTypes';
import { createPersonCase } from '@/features/person/useCase/createPersonCase';
import { updatePersonCase } from '@/features/person/useCase/updatePersonCase';
import { MESSAGES } from '@/utils/constantsUtils';
import { forwardRef, useImperativeHandle } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa';
import './style-person-register.css';

const PersonFormRegister = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return { populateForm };
  });

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TPerson>();

  const { alertState, setAlertState } = useMyAlert();

  const onSubmit: SubmitHandler<TPerson> = async (data) => {
    let success = false;

    if (data.id && data.id > 0) {
      const { success: updateSuccess } = await updatePersonCase(data);
      success = updateSuccess;
    } else {
      const { success: createSuccess } = await createPersonCase(data);
      success = createSuccess;
    }

    if (!success) {
      setAlertState({ message: MESSAGES.fail_record, key: Date.now() });
      return;
    }

    setAlertState({ message: MESSAGES.operation_successfully, key: Date.now() });
    populateForm(TPersonDefaultValues);
  };

  const populateForm = (person: TPerson) => {
    reset(person);
  };

  const PersonTypeSelector = () => (
    <MyCardBox title={{ caption: 'Tipo da pessoa' }}>
      <ul className="my-checkbox-style">
        {PersonType.map(({ caption, type }) => {
          const key = `is_${type}`;
          return (
            <li key={key}>
              <input type="checkbox" id={key} {...register(key as any)} />
              <label htmlFor={key}>{caption}</label>
            </li>
          );
        })}
      </ul>
    </MyCardBox>
  );

  return (
    <>
      <MyForm onSubmit={handleSubmit(onSubmit)} id="fixed-person-register">
        <div id="person-register-wrapper">
          <div id="person-register-left">
            <MyInputText title="Nome" {...register('name', { required: MESSAGES.required_field })} errorText={errors?.name?.message} />
            <MyInputText title="Apelido" {...register('nickname')} errorText={errors?.nickname?.message} />
            <MyRadioGroup
              name="rdg-active"
              valueChecked={watch('active')}
              onChange={(value) => setValue('active', value === 'true' ? true : false)}
              attributes={[
                { label: 'Ativo', value: 'true', id: 'rdg-active' },
                { label: 'Inativo', value: 'false', id: 'rdg-inactive' },
              ]}
            />
          </div>
          <div id="person-register-right">
            <PersonTypeSelector />
          </div>
        </div>
        <MyFloattingButton
          attributes={{ type: 'submit' }}
          icon={<FaRegSave size={18} />}
        />
      </MyForm>
      <MyAlert {...alertState} />
    </>
  );
});

export default PersonFormRegister;
