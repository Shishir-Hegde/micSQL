"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface GraphData {
  [key: string]: string | number;
}

interface GraphProps {
  data: GraphData[];
  title: string;
  description: string;
  xAxisKey: string;
  footerData?: {
    trend?: {
      value: number;
      direction: "up" | "down";
    };
    description?: string;
  };
}

export function Graph({
  data,
  title,
  description,
  xAxisKey,
  footerData,
}: GraphProps) {
  // Get all keys except the xAxisKey to determine the number of bars
  const barKeys = Object.keys(data[0]).filter((key) => key !== xAxisKey);

  // Create chart config dynamically based on the data keys
  const dynamicChartConfig = barKeys.reduce((acc, key) => {
    acc[key] = {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      color: "#bfff00",
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={dynamicChartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                typeof value === "string" ? value.slice(0, 3) : value
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {barKeys.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                fill="var(--color-desktop)"
                radius={4}
              />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
      {footerData && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {footerData.trend && (
            <div className="flex gap-2 font-medium leading-none">
              Trending {footerData.trend.direction} by {footerData.trend.value}%
              this month
              <TrendingUp
                className={`h-4 w-4 ${
                  footerData.trend.direction === "down" ? "rotate-180" : ""
                }`}
              />
            </div>
          )}
          {footerData.description && (
            <div className="leading-none text-muted-foreground">
              {footerData.description}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
