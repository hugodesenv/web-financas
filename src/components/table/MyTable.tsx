import { CSSProperties } from "react";
import "./style.css";

interface IProps {
  columns: {
    key: string;
    label: string;
    style?: CSSProperties;
    className?: any;
  }[];
  datasource: {
    text: any;
    style?: CSSProperties,
    className?: any;
  }[][];
}

export default function MyTable(props: IProps) {
  function _TableTitle() {
    return (
      <tr>
        {props.columns.map((column) => (
          <th style={{ textAlign: 'left', ...column.style }} className={column.className} key={column.key}>
            <span>{column.label}</span>
          </th>
        ))}
      </tr>
    );
  }

  function _TableItems() {
    return props.datasource.map((rowData) => {
      return (
        <tr>
          {rowData.map((data) => (
            <td style={data.style}>
              <span>{data.text}</span>
            </td>
          ))}
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
