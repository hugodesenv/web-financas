import MyDrawer, { IPropsMyDrawerCommom } from "@/components/drawer/MyDrawer";
import MyInputText from "@/components/text/MyInputText";
import dayjs from "dayjs";

export interface IEntryFilterData {
  issueEnd: Date;
}

export enum TTypeFieldEntryFilter {
  issueDate,
}

interface IProps extends IPropsMyDrawerCommom {
  data: IEntryFilterData;
  onChange: (newValue: string, name: TTypeFieldEntryFilter) => void;
}

const EntryFilterDrawer = (props: IProps) => {
  return (
    <>
      <MyDrawer title="Filtro dos lançamentos" isOpen={props.isOpen} onClose={() => props.onClose()} key={Date.now()}>
        <MyInputText
          name="edt-date-filter-entry"
          title="Data final de lançamento"
          type="date"
          value={dayjs(props.data.issueEnd).format('YYYY-MM-DD')}
          onChange={(e) => props.onChange(e.target.value, TTypeFieldEntryFilter.issueDate)}
        />
      </MyDrawer >
    </>
  )
}

export default EntryFilterDrawer;