import { CSSProperties } from "react";
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
  function _TableTitle() {
    return (
      <tr>
        {
          props.columns.map((column) => (
            <th
              style={{ textAlign: 'left', ...column.style }}
              className={column.className}
              key={column.key}
            >
              <span>{column.label}</span>
            </th>
          ))
        }
      </tr>
    );
  }

  function _TableItems() {
    const onRowClick = (rowData: any) => props.onRowClick && props.onRowClick(rowData.object);
    return props.datasource.map((rowData) => {
      return (
        <tr onClick={() => onRowClick(rowData)}>
          {
            rowData.dataSource?.map((table: IMyTableDataSource) => {
              return <td style={table.style}>
                <span>{table.text}</span>
              </td>
            })
          }
        </tr>
      );
    });
  }

  return (
    <div className="mytable-skedol">
      <table cellSpacing={0} width="100%">
        <thead className="mytable-thead">{_TableTitle()}</thead>
        <tbody className="mytable-tbody">{_TableItems()}</tbody>
      </table>
    </div>
  );
}
