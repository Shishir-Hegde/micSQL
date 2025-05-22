"use client";

import * as React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartJsPieProps {
  data: {
    [key: string]: string | number;
  }[];
  title: string;
  description: string;
  valueKey: string;
  nameKey: string;
  type: "pie" | "donut";
}

const generateColors = (count: number): string[] => {
  const colors: string[] = [];
  const hueStep = 360 / count;

  for (let i = 0; i < count; i++) {
    const hue = (i * hueStep) % 360;
    const saturation = 70 + Math.random() * 20; // 70-90%
    const lightness = 50 + Math.random() * 10; // 50-60%
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }

  return colors;
};

export function ChartJsPie({
  data,
  title,
  description,
  valueKey,
  nameKey,
  type,
}: ChartJsPieProps) {
  const chartData: ChartData<"pie"> = {
    labels: data.map((item) => item[nameKey] as string),
    datasets: [
      {
        data: data.map((item) => item[valueKey] as number),
        backgroundColor: generateColors(data.length),
        borderColor: "#1F2937",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = Number(context.raw);
            const total = context.dataset.data.reduce(
              (a: number, b: number) => Number(a) + Number(b),
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: type === "donut" ? "60%" : "0%",
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="relative w-full aspect-square">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
