import { EnEntryType, TEntry } from '@/type/entryTypes';
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

interface IProps {
  entries: TEntry[]
}

export function HomeChartEntries(props: IProps) {
  const isMobile = useMediaQuery({ maxWidth: '768px' });

  const _data: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Entrada",
        data: props?.entries.filter(({ type }) => type === EnEntryType.RECEIVABLE).map(({ total }) => total),
        backgroundColor: '#00198a',
        stack: 'Stack 2',
      },
      {
        label: "Saída",
        data: props?.entries.filter(({ type }) => type === EnEntryType.PAYABLE).map(({ total }) => total),
        backgroundColor: '#EE476EFF',
        stack: 'Stack 0',
      },
      {
        label: 'Saldo livre',
        data: labels.map(() => Math.random() * 7),
        backgroundColor: '#64D9B4FF',
        stack: 'Stack 1',
      },
    ]
  }

  console.log("Planilhas", _data);

  return <Bar
    options={options}
    data={_data}
    height={isMobile === true ? '600px' : '70vh'}
  />;
}
