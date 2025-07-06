'use client';

import MyModalConfirmation from '@/components/modal/MyModalConfirmation/MyModalConfirmation';
import { IModalConfirmStep, useMyModalConfirmation } from '@/components/modal/MyModalConfirmation/hook';
import MyTable, { IMyTableWrapper } from '@/components/table/MyTable';
import { TPropsSearchScreen } from '@/type/commomTypes';
import { TPerson } from '@/type/personTypes';
import { deletePersonCase } from '@/use/person/delete';
import { findAllPersonCase } from '@/use/person/findAll';
import { forwardRef, useImperativeHandle, useState } from 'react';

const PersonSearch = forwardRef((props: TPropsSearchScreen, ref) => {
  useImperativeHandle(ref, function () {
    return {
      onSearch,
    };
  });

  // states
  const [personData, setPersonData] = useState<TPerson[]>([]);
  const { isOpen, stepIndex, step, onConfirm, onCancel, onClose, prepareSteps } = useMyModalConfirmation({
    onSuccess: async () => await handleDelete(),
  });

  // deleting peson
  async function handleDelete() {
    let isDeleted = await deletePersonCase(step.data ?? 0);

    if (isDeleted) {
      return setPersonData(personData.filter((person: TPerson) => person.id != step.data));
    }
  }

  // searching all person results
  async function onSearch() {
    const { data } = await findAllPersonCase({ name: "" });
    setPersonData(data);
  }

  // event when clicked on the row
  function onSelect(index: number) {
    const person = personData[index];
    props.onSelect(person);
  }

  // event when clicked to delete the person
  function onDeleteClick(dataIndex: number) {
    let { id } = personData[dataIndex];
    let steps: IModalConfirmStep[] = [
      {
        title: 'Deseja excluir?',
        message: 'Ao confirmar essa ação não poderá ser desfeita',
        actionResult: true,
      },
    ];

    prepareSteps(steps, id);
  }

  // transforming my data into dataSource type
  const datasource = [
    ...personData.map((person) => {
      return {
        data: [
          //{ checked: true },
          { text: person.id },
          { text: person.name },
        ],
      } as IMyTableWrapper;
    }),
  ] as IMyTableWrapper[];

  return (
    <>
      <MyTable
        key="tb-person-search"
        columns={[
          //{ key: 'checked-person-search', type: "checkbox" },
          { key: 'id-person-search', label: 'Código', style: { width: '10%' } },
          { key: 'name-person-search', label: 'Nome' },
        ]}
        datasource={datasource}
        onSelectedRow={onSelect}
        //onChecked={(rowIndex: number) => console.log('selecionou a linha', rowIndex)}
        //onCheckAll={(isChecked: boolean) => console.log('Tratar o marca desmarca todos aqui fora')}
        columnAction={[{ title: 'Excluir', onClick: (rowIndex) => onDeleteClick(rowIndex) }]}
      />
      <MyModalConfirmation
        message={step.list[stepIndex]?.message}
        title={step.list[stepIndex]?.title}
        isOpen={isOpen}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        size="micro-small"
      />
    </>
  );
});

export default PersonSearch;
