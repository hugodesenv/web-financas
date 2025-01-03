// Tela circulada pelo forwardRef pra podermos utilizar por referencia alguns evnetos
// diretamente na classe pai. Expomos esses eventos no hook useImperativeHandle
// Observação: Hoje dia 20/11/2024 o Brasil empatou com o Uruguai por 1x1
// e outra coisa... Eu estou anotando isso hoje devido meu nivel de programação, futuramente remover
// todos esse comentarios de iniciante.
"use client";

import MyAlert from "@/components/alert/MyAlert";
import { useMyAlert } from "@/components/alert/hook";
import MyFloattingButton from "@/components/button/myFloattingButton/MyFloattingButton";
import MyCardBox from "@/components/card/my-card/MyCardBox";
import { MyForm } from "@/components/form/MyForm";
import MyInputText from "@/components/text/MyInputText";
import { MESSAGES } from "@/lib/lib.constants";
import { IPersonDto, PersonType } from "@/lib/lib.types";
import { savePerson, updatePerson } from "@/service/client/srv.client.person";
import { forwardRef, useImperativeHandle } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";
import './style-person-register.css';

// Default field to formulate inicialization
const defaultFields: Partial<IPersonDto> = { name: '', nickname: '' };

const PersonFormRegister = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      clearForm,
      populateForm
    }
  });

  const { handleSubmit, register, reset, formState: { errors } } = useForm<IPersonDto>();

  const { alertState, setAlertState } = useMyAlert();

  const onSubmit: SubmitHandler<IPersonDto> = async (data) => {
    const { success } = (data.id ?? 0) > 0
      ? await updatePerson(data)
      : await savePerson(data);

    if (!success) {
      setAlertState({ message: MESSAGES.fail_record, key: Date.now() });
      return;
    }

    setAlertState({ message: MESSAGES.operation_successfully, key: Date.now() });
    clearForm();
  }

  const clearForm = () => reset(defaultFields);

  const populateForm = (person: IPersonDto) => reset(person);

  const PersonTypeSelector = () => (
    <MyCardBox title={{ caption: 'Tipo da pessoa' }}>
      <ul className="my-checkbox-style">
        {
          PersonType.map(({ caption, type }) => (
            <li key={`is_${type}`}>
              <input
                type="checkbox"
                {...register(`is_${type}` as any)}
              />
              <label>{caption}</label>
            </li>
          ))
        }
      </ul>
    </MyCardBox>
  );

  return (
    <>
      <MyForm onSubmit={handleSubmit(onSubmit)} id="fixed-person-register">
        <div id="person-register-wrapper">
          <div id="person-register-left">
            <MyInputText
              title="Nome"
              {...register('name', { required: MESSAGES.required_field })}
              errorText={errors?.name?.message}
            />
            <MyInputText
              title="Apelido"
              {...register('nickname')}
              errorText={errors?.nickname?.message}
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
})

export default PersonFormRegister;