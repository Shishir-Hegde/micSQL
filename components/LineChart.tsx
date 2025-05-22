"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

interface LineData {
  [key: string]: string | number;
}

interface LineChartProps {
  data: LineData[];
  title: string;
  description: string;
  xAxisKey: string;
  dataKeys: string[];
  footerData?: {
    trend?: {
      value: number;
      direction: "up" | "down";
    };
    description?: string;
  };
}

export function LineChartComponent({
  data,
  title,
  description,
  xAxisKey,
  dataKeys,
  footerData,
}: LineChartProps) {
  // Create chart config dynamically based on the data keys
  const dynamicChartConfig = dataKeys.reduce((acc, key, index) => {
    acc[key] = {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      color: `hsl(var(--chart-${index + 1}))`,
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
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {dataKeys.map((key, index) => (
              <Line
                key={key}
                dataKey={key}
                type="natural"
                stroke={`hsl(var(--chart-${index + 1}))`}
                strokeWidth={2}
                dot={{
                  fill: `hsl(var(--chart-${index + 1}))`,
                }}
                activeDot={{
                  r: 6,
                }}
              />
            ))}
          </LineChart>
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
