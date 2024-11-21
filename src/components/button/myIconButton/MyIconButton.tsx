import { ButtonHTMLAttributes } from "react";
import { MdOutlineAddCircleOutline, MdOutlineCleaningServices, MdOutlineFilterList, MdOutlineSave, MdOutlineSearch } from "react-icons/md";
import MyButton from "../myButton/MyButton";

export enum EnIconButtonType {
  NEW,
  CLEAR,
  SEARCH,
  SAVE,
  UNDEFINED,
  FILTER
};

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: EnIconButtonType,
  isLoading?: boolean,
};

const iconConfig = [
  {
    iconType: EnIconButtonType.NEW,
    icon: <MdOutlineAddCircleOutline />,
  },
  {
    iconType: EnIconButtonType.CLEAR,
    icon: <MdOutlineCleaningServices />
  },
  {
    iconType: EnIconButtonType.SEARCH,
    icon: <MdOutlineSearch />
  },
  {
    iconType: EnIconButtonType.SAVE,
    icon: <MdOutlineSave />
  },
  {
    iconType: EnIconButtonType.FILTER,
    icon: <MdOutlineFilterList />
  }
] as {
  iconType: EnIconButtonType,
  icon: any,
}[]

export default function MyIconButton(props: IProps) {
  // Com base no tipo passado pelo programador, buscamos ele no array de configuraçao na qual retorna
  // diversas propriedades, entretanto, desconstruimos e obtemos apenas a propriedade "icon".
  const [{ icon }] = iconConfig.filter(({ iconType }) => iconType == props.iconType);

  return (
    <MyButton {...props} style={{ minWidth: 'min-content' }}>
      {icon}
    </MyButton>
  )
}