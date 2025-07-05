import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const data = {
  labels,
  datasets: [
    {
      label: 'Receita',
      data: labels.map(() => Math.random() * 7),
      backgroundColor: '#00198a',
      stack: 'Stack 2',
    },
    {
      label: 'Despesa',
      data: labels.map(() => Math.random() * 7),
      backgroundColor: '#EE476EFF',
      stack: 'Stack 0',
    },
    {
      label: 'Saldo livre',
      data: labels.map(() => Math.random() * 15),
      backgroundColor: '#64D9B4FF',
      stack: 'Stack 1',
    },
  ],
};

export function HomeChartEntries() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });

  return <Bar
    options={options}
    data={data}
    height={isMobile === true ? '600px' : '70vh'}
  />;
}
