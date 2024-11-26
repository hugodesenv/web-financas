'use client';

import MyModalConfirmation from "@/components/modal/MyModalConfirmation/MyModalConfirmation";
import { IModalConfirmStep, useMyModalConfirmation } from "@/components/modal/MyModalConfirmation/hook";
import MyTable, { IMyTableWrapper } from "@/components/table/MyTable";
import { IPersonDto } from "@/lib/lib.types";
import { fetchPersonAll } from "@/service/client/srv.client.person";
import { forwardRef, useImperativeHandle, useState } from "react";

interface IProps {
  onSelected: (id?: number) => void,
}

const PersonSearch = forwardRef((props: IProps, ref) => {
  useImperativeHandle(ref, () => {
    return {
      onSearch
    }
  });

  const [personData, setPersonData] = useState<IPersonDto[]>([]);
  const {
    isOpen,
    stepIndex,
    steps,
    onConfirm,
    onCancel,
    onClose,
    setSteps
  } = useMyModalConfirmation({
    onSuccess: () => {
      console.log('caimos no sucesso')
    }
  });

  async function onSearch() {
    const { data } = await fetchPersonAll();
    setPersonData(data);
  }

  function onPersonSelected(index: number) {
    const person = personData[index];
    props.onSelected(person.id);
  }

  const datasource = [
    ...personData.map((person) => {
      return {
        data: [
          { text: person.id },
          { text: person.name }
        ]
      } as IMyTableWrapper
    })
  ] as IMyTableWrapper[];

  function handleDelete() {
    let steps: IModalConfirmStep[] = [
      {
        title: 'Deseja excluir?',
        message: "Ao confirmar essa ação não poderá ser desfeita",
        actionResult: true
      }
    ];

    setSteps(steps);
  }

  return (
    <>
      <MyTable
        key="tb-person-search"
        columns={[
          { key: "id-person-search", label: "Código", style: { width: "10%" } },
          { key: "name-person-search", label: "Nome" },
        ]}
        datasource={datasource}
        onSelectedRow={onPersonSelected}
        columnAction={[
          { title: 'Excluir', onClick: async () => handleDelete() }
        ]}
      />
      <MyModalConfirmation
        message={steps[stepIndex]?.message}
        title={steps[stepIndex]?.title}
        isOpen={isOpen}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
        size="micro-small"
      />
    </>
  )
});

export default PersonSearch;