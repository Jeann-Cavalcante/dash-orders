import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { type } from 'os';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

type ChartOptions = {
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
    };
    title: {
      display: boolean;
      text: string;
    };
  };
  maintainAspectRatio: boolean;
  responsive: boolean;
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "",
        backgroundColor: "",
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  useEffect(() => {
    setChartData({
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Valor R$",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Valor total de vendas por dia",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;