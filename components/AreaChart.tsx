"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

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

interface AreaData {
  [key: string]: string | number;
}

interface AreaChartProps {
  data: AreaData[];
  title: string;
  description: string;
  xAxisKey: string;
  yAxisKey: string;
  footerData?: {
    trend?: {
      value: number;
      direction: "up" | "down";
    };
    description?: string;
  };
}

export function AreaChart({
  data,
  title,
  description,
  xAxisKey,
  yAxisKey,
  footerData,
}: AreaChartProps) {
  // Create chart config dynamically based on the data keys
  const dynamicChartConfig = {
    [yAxisKey]: {
      label: yAxisKey.charAt(0).toUpperCase() + yAxisKey.slice(1),
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={dynamicChartConfig}>
          <RechartsAreaChart
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
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey={yAxisKey}
              type="natural"
              fill={`var(--color-${yAxisKey})`}
              fillOpacity={0.4}
              stroke={`var(--color-${yAxisKey})`}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </CardContent>
      {footerData && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              {footerData.trend && (
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending {footerData.trend.direction} by{" "}
                  {footerData.trend.value}% this month
                  <TrendingUp
                    className={`h-4 w-4 ${
                      footerData.trend.direction === "down" ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              {footerData.description && (
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  {footerData.description}
                </div>
              )}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
