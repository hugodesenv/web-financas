'use client'
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

  return (
    <MyTable
      key="tb-person-search"
      columns={[
        { key: "id-person-search", label: "Código", style: { width: "10%" } },
        { key: "name-person-search", label: "Nome" },
      ]}
      datasource={datasource}
      onSelectedRow={onPersonSelected}
      columnAction={[
        { title: 'Alterar', onClick: () => { console.log('clicou no alterar') } },
        { title: 'Excluir', onClick: () => { console.log('clicou no excluir') } }
      ]}
    />
  )
});

export default PersonSearch;