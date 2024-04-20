import MyTable from "@/components/table/MyTable";

export default function PersonSearch() {
  return (
    <MyTable
      key="tb-person-search"
      columns={[
        { key: "id", label: "Código", style: { width: "10%" } },
        { key: "name", label: "Nome" },
      ]}
      datasource={[
        [{ text: "1" }, { text: "Hugo Souza" }],
        [{ text: "2" }, { text: "Gabriella" }],
        [{ text: "3" }, { text: "Francisco" }],
        [{ text: "4" }, { text: "Maria" }],
        [{ text: "5" }, { text: "Cleo" }],
        [{ text: "6" }, { text: "Cecília" }],
        [{ text: "7" }, { text: "Banguela" }],
        [{ text: "8" }, { text: "Kirk" }],
        [{ text: "9" }, { text: "Zé Roberto" }],
      ]}
    />
  );
}
