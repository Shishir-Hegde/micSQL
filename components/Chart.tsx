"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartJsPie } from "@/components/ChartJsPie";

interface ChartData {
  [key: string]: string | number;
}

interface ChartProps {
  data: ChartData[];
  xAxis: {
    key: string;
    label: string;
    formatter?: (value: string | number) => string;
  };
  yAxis: {
    key: string;
    label: string;
    formatter?: (value: number) => string;
  };
  title: string;
  description: string;
  color?: string;
  chartType?: "bar" | "pie" | "donut" | "line" | "area";
  stackKey?: string;
  yAxisKeys?: string[];
  margin?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
}

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

export function Chart({
  data,
  xAxis,
  yAxis,
  title,
  description,
  color = "#4ade80",
  chartType = "bar",
  stackKey,
  yAxisKeys,
  margin = { top: 20, right: 30, left: 60, bottom: 5 },
}: ChartProps) {
  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={data} margin={margin}>
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey={xAxis.key}
              label={{ value: xAxis.label, position: "bottom" }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={xAxis.formatter}
            />
            <YAxis
              label={{
                value: yAxis.label,
                angle: -90,
                position: "left",
                style: {
                  textAnchor: "middle",
                  fill: "#9CA3AF",
                  fontSize: "16px",
                },
                offset: 40,
                dy: 0,
              }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={yAxis.formatter}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "0.5rem",
              }}
              formatter={(value: number, name: string) => {
                if (name === stackKey) {
                  return [value.toString(), "Count"];
                }
                return [
                  yAxis.formatter ? yAxis.formatter(value) : value.toString(),
                  yAxis.label,
                ];
              }}
              labelFormatter={(label: string | number) =>
                xAxis.formatter ? xAxis.formatter(label) : label.toString()
              }
            />
            {yAxisKeys ? (
              yAxisKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={COLORS[index % COLORS.length]}
                  radius={[4, 4, 0, 0]}
                  stackId="a"
                />
              ))
            ) : (
              <Bar
                dataKey={yAxis.key}
                fill={color}
                radius={[4, 4, 0, 0]}
                stackId="a"
              />
            )}
            {stackKey && (
              <Bar
                dataKey={stackKey}
                fill="#60a5fa"
                radius={[4, 4, 0, 0]}
                stackId="a"
              />
            )}
          </BarChart>
        );

      case "line":
        return (
          <LineChart data={data} margin={margin}>
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey={xAxis.key}
              label={{ value: xAxis.label, position: "bottom" }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={xAxis.formatter}
            />
            <YAxis
              label={{
                value: yAxis.label,
                angle: -90,
                position: "left",
                style: {
                  textAnchor: "middle",
                  fill: "#9CA3AF",
                  fontSize: "16px",
                },
                offset: 40,
                dy: 0,
              }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={yAxis.formatter}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "0.5rem",
              }}
              formatter={(value: number) => [
                yAxis.formatter ? yAxis.formatter(value) : value.toString(),
                yAxis.label,
              ]}
              labelFormatter={(label: string | number) =>
                xAxis.formatter ? xAxis.formatter(label) : label.toString()
              }
            />
            {yAxisKeys ? (
              yAxisKeys.map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={COLORS[index % COLORS.length]}
                  strokeWidth={2}
                  dot={{ fill: COLORS[index % COLORS.length], strokeWidth: 2 }}
                />
              ))
            ) : (
              <Line
                type="monotone"
                dataKey={yAxis.key}
                stroke={color}
                strokeWidth={2}
                dot={{ fill: color, strokeWidth: 2 }}
              />
            )}
          </LineChart>
        );

      case "area":
        return (
          <AreaChart data={data} margin={margin}>
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey={xAxis.key}
              label={{ value: xAxis.label, position: "bottom" }}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={xAxis.formatter}
            />
            <YAxis
              label={{
                value: yAxis.label,
                angle: -90,
                position: "left",
                style: {
                  textAnchor: "middle",
                  fill: "#9CA3AF",
                  fontSize: "16px",
                },
                offset: 40,
                dy: 0,
              }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9CA3AF" }}
              tickFormatter={yAxis.formatter}
              width={100}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "0.5rem",
              }}
              formatter={(value: number) => [
                yAxis.formatter ? yAxis.formatter(value) : value.toString(),
                yAxis.label,
              ]}
              labelFormatter={(label: string | number) =>
                xAxis.formatter ? xAxis.formatter(label) : label.toString()
              }
            />
            {yAxisKeys ? (
              yAxisKeys.map((key, index) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={COLORS[index % COLORS.length]}
                  fill={COLORS[index % COLORS.length]}
                  fillOpacity={0.3}
                />
              ))
            ) : (
              <Area
                type="monotone"
                dataKey={yAxis.key}
                stroke={color}
                fill={color}
                fillOpacity={0.3}
              />
            )}
          </AreaChart>
        );

      case "pie":
        return (
          <Card className="w-full">
            <CardContent className="p-6">
              <ChartJsPie
                data={data}
                title={title}
                description={description}
                valueKey={yAxis.key}
                nameKey={xAxis.key}
                type={chartType}
              />
            </CardContent>
          </Card>
        );

      case "donut":
        return (
          <Card className="w-full">
            <CardContent className="p-6">
              <ChartJsPie
                data={data}
                title={title}
                description={description}
                valueKey={yAxis.key}
                nameKey={xAxis.key}
                type={chartType}
              />
            </CardContent>
          </Card>
        );

      default:
        return <div>Unsupported chart type</div>;
    }
  };

  if (chartType === "pie" || chartType === "donut") {
    return renderChart();
  }

  return (
    <Card className="w-full">
      <CardContent>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
