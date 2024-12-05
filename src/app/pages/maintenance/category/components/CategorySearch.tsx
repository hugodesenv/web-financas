import MyTable, { IMyTableWrapper } from "@/components/table/MyTable";
import { ICategory } from "@/lib/lib.types";
import { fetchCategoryAll } from "@/service/client/srv.client.category";
import { forwardRef, useImperativeHandle, useState } from "react";

const CategorySearch = forwardRef((_, ref) => {
  useImperativeHandle(ref, () => {
    return {
      onSearch
    }
  });

  const [categories, setCategories] = useState<ICategory[]>([]);

  async function onSearch() {
    let { data } = await fetchCategoryAll();
    setCategories(data);
  };

  const dataSource: IMyTableWrapper[] = categories.map(({ id, description }) => (
    {
      data: [
        { text: id },
        { text: description }
      ]
    }
  ));

  return (
    <MyTable
      key="tb-category-search"
      columns={[
        { key: 'id-category', label: 'Cód.', style: { width: '10%' } },
        { key: 'id-description', label: 'Descrição' }
      ]}
      datasource={dataSource}
    />
  )
});

export default CategorySearch;