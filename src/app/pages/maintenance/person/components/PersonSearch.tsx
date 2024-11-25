'use client'
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
    currentStepIndex,
    setSteps,
    steps,
    onConfirm,
    onCancel,
    onClose,
  } = useMyModalConfirmation();

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
        actionResult: true,
        title: 'Primeiro step',
        message: 'Mensagem primeiro step'
      },
      {
        actionResult: false,
        title: 'Segundo step vai pular',
        message: 'esse vai pular'
      },
      {
        actionResult: true,
        title: 'Terceiro e ultimo step',
        message: 'Esse vai ser o ultimo e é pra dar boa'
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
        message={steps[currentStepIndex]?.message}
        title={steps[currentStepIndex]?.title}
        isOpen={isOpen}
        onCancel={onCancel}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </>
  )
});

export default PersonSearch;