import { CSSProperties, useEffect, useState } from "react";
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

Começar criar o totalizador...
Trabalhar com o state!

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
}

export default function MyTable(props: IProps) {
  const [data, setData] = useState([] as IMyTableWrapper[]);


  useEffect(() => {
    setData(props.datasource);
  }, [props.datasource]);

  /**
   * Componente das colunas do grid
   * @returns uma listagem de Ths do grid.
   */
  function TableColumns() {
    const ComponentColumn = ({ column }: any) => (
      <th style={{ textAlign: 'left', ...column.style }} className={column.className} key={column.key}>
        <span>{column.label}</span>
      </th>
    )

    return (
      <tr>
        {
          props.columns.map((column) => (
            <ComponentColumn column={column} />
          ))
        }
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
      return pprops.dataSource.map((data: IMyTableDataSource) => {
        return <td style={data.style} className={data.className}>
          {data.text}
        </td>
      });
    };

    const TableRow = (ptableContent: IMyTableWrapper) => <tr onClick={() => onRowClick(tableContent.object)}>
      <TableColumns dataSource={ptableContent.dataSource} />
    </tr>;

    const rowsResult = data.map((tableContent: IMyTableWrapper) => TableRow(tableContent));
    return rowsResult;
  };

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
      <div className="mytable-totalization-body">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
    </div>
  );
}
