import './style.css';

interface IColumn {
  key: string;
  label: string;
}

interface IProps {
  columns: IColumn[],
  datasource: any[]
}

export default function MyTable(props: IProps) {
  return (
    <table cellSpacing={0} width='100%'>
      <thead className='mytable-thead'>
        <tr>
          {
            props.columns.map(({ key, label }) => (
              <th key={key}>
                <span>{label}</span>
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody className='mytable-tbody'>
        <tr>
          <td>oi</td>
          <td>oi</td>
        </tr>
        <tr>
          <td>oi</td>
          <td>oi</td>
        </tr>
        <tr>
          <td>oi</td>
          <td>oi</td>
        </tr>
      </tbody>
    </table>
  )
}