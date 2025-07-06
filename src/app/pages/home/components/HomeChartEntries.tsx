import { EnEntryType, TEntry } from '@/type/entryTypes';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js';
import dayjs from 'dayjs';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

interface IGetDataSets {
  receive: number[],
  pay: number[],
  free: number[]
}

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

const _emptyLabelArray = Array.from({ length: 6 });
const _subtractMonth = (index: number) => dayjs().subtract(index, 'month');

const buildLabels = _emptyLabelArray.reduce((prev: string[], curr, index: number) => {
  prev.push(
    _subtractMonth(index).format('MM/YYYY')
  );

  return prev;
}, []);

function buildDatasets(entries: TEntry[]) {
  const resultData = _emptyLabelArray.reduce<IGetDataSets>((prev, _, index) => {
    const filter_key = _subtractMonth(index);

    const dataFiltered = entries.filter(({ issue_date }) => {
      const issueDate = dayjs(issue_date);
      return issueDate.month() == filter_key.month() && issueDate.year() == filter_key.year();
    });

    const receive = dataFiltered?.filter(({ type }) => type === EnEntryType.RECEIVABLE);
    const pay = dataFiltered?.filter(({ type }) => type === EnEntryType.PAYABLE);

    const totalReceive = receive.reduce((prev: number, curr) => prev + curr.total, 0);
    const totalPay = pay.reduce((prev: number, curr) => prev + curr.total, 0);

    return {
      receive: [...prev.receive, totalReceive],
      pay: [...prev.pay, totalPay],
      free: [...prev.free, totalReceive - totalPay]
    };
  }, { free: [], pay: [], receive: [] });

  return [
    {
      label: "Entrada",
      data: resultData.receive,
      backgroundColor: '#00198a',
      stack: 'Stack 2',
    },
    {
      label: "Saída",
      data: resultData.pay,
      backgroundColor: '#EE476EFF',
      stack: 'Stack 0',
    },
    {
      label: 'Saldo livre',
      data: resultData.free,
      backgroundColor: '#6BDCB8FF',
      stack: 'Stack 1',
    },
  ];
}

export function HomeChartEntries(props: { entries: TEntry[] }) {
  const isMobile = useMediaQuery({ maxWidth: '768px' });

  return <Bar
    options={options}
    data={{
      labels: buildLabels,
      datasets: buildDatasets(props.entries)
    }}
    height={isMobile === true ? '600px' : '70vh'}
  />;
}
