'use client';

import { CSSProperties, useEffect, useState } from "react";
import MyPagination from "./MyPagination";
import "./style.css";

export interface IMyTableDataSource {
  text: any;
  style?: CSSProperties,
  className?: any;
}

export interface IMyTableWrapper {
  object: any;
  dataSource: IMyTableDataSource[]
}

// Tipagem das propriedades.
interface IProps {
  columns: {
    key: string;
    label: string;
    style?: CSSProperties;
    className?: any;
  }[];
  datasource: IMyTableWrapper[];
  onRowClick?: (data: any) => void;
};

const quantityItemsPerPage = 2;

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

  useEffect(() => {
    handleDataPerPage(1);
  }, [props.datasource]);

  /**
   * Componente das colunas do grid
   * @returns uma listagem de Ths do grid.
   */
  function TableColumns() {
    const ComponentColumn = ({ column }: any) => (
      <th
        style={{ textAlign: 'left', ...column.style }}
        className={column.className}
        key={column.key}
      >
        <span>{column.label}</span>
      </th>
    )

    return (
      <tr>
        {props.columns.map((column) => <ComponentColumn column={column} />)}
      </tr>
    );
  }

  /**
   * Componente contendo o conteudo da tabela
   * @returns uma listagem de Trs.
   */
  const TableContent = () => {
    const onRowClick = (pdata: any) => props.onRowClick && props.onRowClick(pdata);

    const TableColumns = (pprops: { dataSource: IMyTableDataSource[] }) => {
      return pprops.dataSource?.map((data: IMyTableDataSource) => {
        return <td style={data.style} className={data.className}>
          {data.text}
        </td>
      });
    };

    const TableRow = (ptableContent: IMyTableWrapper) => (
      <tr onClick={() => onRowClick(ptableContent.object)}>
        <TableColumns dataSource={ptableContent.dataSource} />
      </tr>
    );

    const rowsResult = data.map((tableContent: IMyTableWrapper) => TableRow(tableContent));
    return rowsResult;
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
          {<TableContent />}
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
