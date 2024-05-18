import { CSSProperties } from "react";
import MyButton from "../button/MyButton";

export enum OptionType {
  SAVE = "save",
  DELETE = "delete",
  CANCEL = "cancel",
  BACK = "back",
}

interface IProps {
  formName: string;
  typesAccept: OptionType[];
  isLoading?: boolean;
  onClick: (type: OptionType) => void;
}

interface IInternalSettings {
  type: OptionType;
  label: string;
}

const style = {
  box: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  } as CSSProperties,
  items: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
  } as CSSProperties,
};

const optionsAvailable: IInternalSettings[] = [
  {
    label: "Gravar",
    type: OptionType.SAVE,
  },
  {
    label: "Cancelar",
    type: OptionType.CANCEL,
  },
  {
    label: "Voltar",
    type: OptionType.BACK,
  },
];

function LayoutButtonsRegister(props: IProps) {
  function handleClickButton(option: OptionType) {
    props.onClick(option);
  }

  function ButtonsList() {
    const comumnButtonAttributes = {
      isLoading: props.isLoading,
    };

    /**
     * Verifico se o botão de excluir está disponibilizado para uso.
     * Caso esteja, eu adiciono ele em "rightSide" para posicionar ao lado direito da tela,
     * longe dos outros botões.
     */
    let buttonPositions = { left: [] as any[], right: [] as any[] };
    
    let [config] = props.typesAccept.filter((option) => option === OptionType.DELETE);

    if (config) {
      const element = (
        <li key={`${props.formName}_layoutbuttons_${0}`}>
          <MyButton
            onClick={() => handleClickButton(OptionType.DELETE)}
            {...comumnButtonAttributes}
          >
            Excluir
          </MyButton>
        </li>
      );

      buttonPositions.right.push(element);
    }

    /**
     * Para os demais botões (Salvar, voltar etc), eu posiciono ele ao lado esquerdo.
     */
    buttonPositions.left = props.typesAccept?.map((optionType: OptionType) => {
      let [config] = optionsAvailable.filter(({ type }) => type === optionType);
      if (config) {
        return (
          <li key={`${props.formName}_layoutbuttons_${config.type.toString()}`}>
            <MyButton
              {...comumnButtonAttributes}
              onClick={() => handleClickButton(config.type)}
            >
              {config.label}
            </MyButton>
          </li>
        );
      }
    });

    return (
      <div style={style.box}>
        <ul style={style.items}>{...buttonPositions.left}</ul>
        <ul style={style.items}>{...buttonPositions.right}</ul>
      </div>
    );
  }

  return <ButtonsList />;
}

export default LayoutButtonsRegister;
