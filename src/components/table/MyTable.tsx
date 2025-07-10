'use client';

import { CSSProperties, useEffect, useId, useState } from "react";
import MySelect from "../select/MySelect";
import MySelectOption from "../select/MySelectOption";
import MyPagination from "./MyPagination";
import "./style.css";

const quantityItemsPerPage = 12;

export interface IMyTableDataSource {
  text?: any;
  checked?: boolean;
  style?: CSSProperties,
  className?: any;
}

export interface IMyTableWrapper {
  data: IMyTableDataSource[]
}

export interface IMyTableAction {
  title: string;
  onClick: (rowIndex: number) => void;
}

export interface IMyTableColumn {
  key: string;
  label?: string;
  style?: CSSProperties;
  className?: any;
  type?: "text" | "checkbox"
}

interface IProps {
  columns: IMyTableColumn[];
  columnAction?: IMyTableAction[]
  datasource: IMyTableWrapper[];
  // when click on checkbox from register
  onChecked?: (rowIndex: number, isChecked: boolean) => void;
  // when click on checkbox master of grid column
  onCheckAll?: (isChecked: boolean) => void;
  // when click on the line from the grid
  onSelectedRow?: (rowIndex: number) => void;
};

let customStyle = {
  actionColumn: {
    position: 'sticky',
    zIndex: 1,
    right: 0,
    backgroundColor: '#fff',
    width: '40px'
  } as CSSProperties,
  actionSelect: {
    border: 0
  } as CSSProperties,
  checkboxStyle: {
    width: 0
  } as CSSProperties,
  totalizationWrapper: {
    marginTop: '10px'
  } as CSSProperties,
}

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
    if (props.datasource.length) {
      handleDataPerPage(1);
    }
  }, [props?.datasource]);

  /**
   * Evento ao trocar a opção da coluna "ação".
   * Basicamente eu busco no meu objeto um cara que possui o mesmo nome do campo clicado.
   * Com o primeiro campo encontrado, eu invoco a sua propriedade onClick.
   * By Hugo Souza 23/11/2024
   * @param event 
   */
  function onActionChange(event: any, rowIndex: number) {
    const lAction = props.columnAction?.filter(({ title }) => title == event.target.value)[0];
    lAction && lAction.onClick(rowIndex);
    setSelectedValue('option-default');
  }

  // Event when the user click on the line from grid.
  function onRowClick(index: number) {
    props?.onSelectedRow && props.onSelectedRow(index);
  }

  // Event when click on checkbox from grid column
  function hancleClickCheckAll(event: any) {
    props?.onCheckAll && props.onCheckAll(event.target.checked);
  }

  function TableColumns() {
    return (
      // Preparing the default column from grid.
      <tr>
        {
          props.columns.map((column) => {
            return (
              <th style={{ textAlign: 'left', ...column.style }} className={column.className} key={column.key}>
                {
                  column.type == 'checkbox'
                    ? <input type="checkbox" onClick={hancleClickCheckAll} />
                    : <span>{column.label}</span>
                }
              </th>
            )
          })
        }
        {
          // Preparing the action column from grid.
          props.columnAction && (
            <th style={customStyle.actionColumn}>
              <span>Ações</span>
            </th>
          )
        }
      </tr>
    );
  }

  const TableBody = () => {
    return data.map(({ data }, index: number) => (
      // Preparing the normal data columns from1 grid.
      <tr>
        {
          data?.map(({ className, checked, style, text }) => {
            return (
              checked
                ? (
                  <td className={className} style={customStyle.checkboxStyle}>
                    <input
                      type="checkbox"
                      onClick={(event: any) => {
                        props?.onChecked &&
                          props.onChecked(index, event.target.checked);
                      }}
                    />
                  </td>
                )
                : (
                  <td
                    className={className}
                    style={style}
                    onClick={() => onRowClick(index)}>
                    {text}
                  </td>
                )
            )
          })
        }
        {
          // Preparing and showing action column if it exists
          props.columnAction && (
            <td>
              <MySelect style={customStyle.actionSelect} value={selectedValue} onChange={(e) => onActionChange(e, index)}>
                <MySelectOption value='option-default'>...</MySelectOption>
                {
                  props.columnAction.map(({ title }) => (
                    <MySelectOption key={useId()} value={title}>
                      {title}
                    </MySelectOption>
                  ))
                }
              </MySelect>
            </td>
          )
        }
      </tr>
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
          <TableColumns />
        </thead>
        <tbody className="mytable-tbody">
          <TableBody />
        </tbody>
      </table>
      {/* totalizador */}
      <div style={customStyle.totalizationWrapper}>
        <MyPagination
          quantityItems={props.datasource?.length}
          quantityPerPage={quantityItemsPerPage}
          onPageSelected={(page: number) => handleDataPerPage(page)}
        />
      </div>
    </div>
  );
}
