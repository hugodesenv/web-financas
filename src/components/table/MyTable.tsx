'use client';

import { CSSProperties, useEffect, useId, useState } from "react";
import MySelect from "../select/MySelect";
import MySelectOption from "../select/MySelectOption";
import MyPagination from "./MyPagination";
import "./style.css";

export interface IMyTableDataSource {
  text: any;
  style?: CSSProperties,
  className?: any;
}

export interface IMyTableWrapper {
  data: IMyTableDataSource[]
}

export interface IMyTableAction {
  title: string;
  onClick: () => void;
}

export interface IMyTableColumn {
  key: string;
  label: string;
  style?: CSSProperties;
  className?: any;
}

// Tipagem das propriedades.
interface IProps {
  columns: IMyTableColumn[];
  columnAction?: IMyTableAction[]
  datasource: IMyTableWrapper[];
  onSelectedRow?: (rowIndex: any) => void;
};

const quantityItemsPerPage = 12;

// Estilo da coluna "ação". Forçando ficar por cima de todas as outras colunas.
const styleColumnAction = {
  position: 'sticky',
  zIndex: 1,
  right: 0,
  backgroundColor: '#fff',
  width: '40px'
} as CSSProperties;

/**
* Tratamos os itens que serao mostrados em tela com base na pagina 
* @param pageNumber numero da pagina selecionada pelo usuario
*/
function getDataPerPage(pageNumber: number, dataSource: IMyTableWrapper[]) {
  const indexInitial = (pageNumber * quantityItemsPerPage) - quantityItemsPerPage;
  const indexFinal = indexInitial + quantityItemsPerPage - 1;

  const itemsPerPage = dataSource.filter((_: IMyTableWrapper, index: number) => index >= indexInitial && index <= indexFinal);
  return itemsPerPage;
}

export default function MyTable(props: IProps) {
  const [data, setData] = useState([] as IMyTableWrapper[]);
  const [selectedValue, setSelectedValue] = useState('option-default');

  useEffect(() => {
    handleDataPerPage(1);
  }, [props.datasource]);

  /**
   * Componente das colunas do grid
   * @returns uma listagem de Ths do grid.
   */
  function TableColumns() {
    return (
      // preparando as colunas padroes
      <tr key={useId()}>
        {
          props.columns.map((column) => {
            return (
              <th style={{ textAlign: 'left', ...column.style }} className={column.className} key={column.key}>
                <span>{column.label}</span>
              </th>
            )
          })
        }
        {
          // preparando a coluna de "ação"
          props.columnAction && <th style={styleColumnAction}><span>Ações</span></th>
        }
      </tr>
    );
  }

  /**
   * Evento ao trocar a opção da coluna "ação".
   * Basicamente eu busco no meu objeto um cara que possui o mesmo nome do campo clicado.
   * Com o primeiro campo encontrado, eu invoco a sua propriedade onClick.
   * By Hugo Souza 23/11/2024
   * @param event 
   */
  function onActionChange(event: any) {
    const lAction = props.columnAction?.filter(({ title }) => title == event.target.value)[0];
    lAction && lAction.onClick();
    setSelectedValue('option-default');
  }

  /**
   * Função quando clicar sob o conteudo da linha
   * @param index 
   */
  function onRowClick(index: number) {
    props.onSelectedRow && props.onSelectedRow(index);
  }

  /**
   * Componente que retorna os conteúdos de cada linha em coluna
   * @returns 
   */
  const TableBody = () => {
    return data.map(({ data }, index: number) => (
      /** preparando as colunas padrões */
      <tr key={useId()}>
        {
          data?.map(({ className, style, text }) => {
            return (
              <td className={className} onClick={() => onRowClick(index)} style={style}>
                {text}
              </td>
            )
          })
        }
        {
          /** preparando a coluna "ação" */
          props.columnAction && (
            <td>
              <MySelect style={{ border: 0 }} value={selectedValue} onChange={onActionChange}>
                <MySelectOption value='option-default'>...</MySelectOption>
                {
                  props.columnAction.map(({ title }) => (
                    <MySelectOption value={title}>{title}</MySelectOption>
                  ))
                }
              </MySelect>
            </td>
          )
        }
      </tr >
    ));
  };

  /**
   * Tratamos a quantidade de dados que serao mostrados na tabela
   * @param pageNumber numero da pagina selecionada
   */
  function handleDataPerPage(pageNumber: number) {
    const res = getDataPerPage(pageNumber, props.datasource);
    setData(() => res);
  }

  return (
    <div className="mytable-skedol">
      <table cellSpacing={0} width="100%">
        <thead className="mytable-thead">
          {<TableColumns />}
        </thead>
        <tbody className="mytable-tbody">
          {<TableBody />}
        </tbody>
      </table>
      {/* totalizador */}
      <div style={{ marginTop: '10px' }}>
        <MyPagination
          quantityItems={props.datasource?.length}
          quantityPerPage={quantityItemsPerPage}
          onPageSelected={(page: number) => handleDataPerPage(page)}
        />
      </div>
    </div>
  );
}
