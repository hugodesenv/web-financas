'use client'
import MyTable, { IMyTableWrapper } from "@/components/table/MyTable";
import { IPersonDto } from "@/lib/lib.types";
import { fetchAll } from "@/service/client/srv.client.person";
import { forwardRef, useImperativeHandle, useState } from "react";

const columnsGrid = [
  { key: "id", label: "Código", style: { width: "10%" } },
  { key: "name", label: "Nome" },
];

const PersonSearch = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      onSearch
    }
  });

  const [personData, setPersonData] = useState<IPersonDto[]>([]);

  async function onSearch() {
    const { data } = await fetchAll();
    setPersonData(data);
  }

  const datasource = [
    ...personData.map((person) => {
      return {
        data: [
          { text: person.id },
          { text: person.nickname }
        ]
      } as IMyTableWrapper
    })
  ] as IMyTableWrapper[];

  return <MyTable key="tb-person-search" columns={columnsGrid} datasource={datasource} />
});

export default PersonSearch;