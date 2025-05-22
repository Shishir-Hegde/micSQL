"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AreaChart } from "@/components/AreaChart";
import { BarChartInteractive } from "@/components/BarChartInteractive";
import { Graph } from "@/components/BarGraph";
import { BarGraph2Cat } from "@/components/BarGraph2Cat";
import { Pie } from "@/components/PieChart";
import { StackedGraph } from "@/components/StackedGraph";

interface RelatedQuery {
  query: string;
  description: string;
}

interface ChartData {
  [key: string]: string | number;
}

interface Visualization {
  chartType: string;
  chartOptions: {
    title: string;
    description: string;
    xAxisKey: string;
    yAxisKey?: string;
    yAxisKeys?: string[];
    valueKey?: string;
    nameKey?: string;
    footerData?: {
      trend?: {
        value: number;
        direction: "up" | "down";
      };
      description?: string;
    };
  };
}

interface QueryResult {
  query: {
    original: string;
    sql: string;
    relatedQueries: RelatedQuery[];
  };
  results: ChartData[];
  visualization: Visualization;
  executionTime: number;
  queryId: string;
}

export default function QueryResults() {
  const [result, setResult] = useState<QueryResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const queryId = searchParams.get("id");

  useEffect(() => {
    const fetchQueryResult = async () => {
      if (!queryId) {
        setError("No query ID provided");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/query-processor/history/${queryId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch query result");
        }
        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchQueryResult();
  }, [queryId]);

  const renderVisualization = () => {
    if (!result?.visualization) return null;

    const { chartType, chartOptions } = result.visualization;
    const {
      title,
      description,
      xAxisKey,
      yAxisKey,
      yAxisKeys,
      valueKey,
      nameKey,
      footerData,
    } = chartOptions;
    const data = result.results;

    switch (chartType) {
      case "area_chart":
        return yAxisKey ? (
          <AreaChart
            data={data}
            title={title}
            description={description}
            xAxisKey={xAxisKey}
            yAxisKey={yAxisKey}
            footerData={footerData}
          />
        ) : null;
      case "bar_chart_interactive":
        return yAxisKeys ? (
          <BarChartInteractive
            data={data}
            title={title}
            description={description}
            xAxisKey={xAxisKey}
            yAxisKeys={yAxisKeys}
          />
        ) : null;
      case "regular_bar_graph":
        return (
          <Graph
            data={data}
            title={title}
            description={description}
            xAxisKey={xAxisKey}
            footerData={footerData}
          />
        );
      case "bar_graph_2cat":
        return (
          <BarGraph2Cat
            data={data}
            title={title}
            description={description}
            xAxisKey={xAxisKey}
            footerData={footerData}
          />
        );
      case "pie_chart":
        return valueKey && nameKey ? (
          <Pie
            data={data}
            title={title}
            description={description}
            valueKey={valueKey}
            nameKey={nameKey}
            footerData={footerData}
          />
        ) : null;
      case "stack_graph":
        return yAxisKeys ? (
          <StackedGraph
            data={data}
            title={title}
            description={description}
            xAxisKey={xAxisKey}
            yAxisKeys={yAxisKeys}
            footerData={footerData}
          />
        ) : null;
      default:
        return <div>Unsupported chart type: {chartType}</div>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#bfff00]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-[#bfff00]">No results found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#bfff00]">
          {result.visualization?.chartOptions.title || "Query Results"}
        </h1>

        {result.visualization?.chartOptions.description && (
          <p className="text-[#bfff00]/80 mb-8">
            {result.visualization.chartOptions.description}
          </p>
        )}

        <div className="bg-black/50 p-6 rounded-lg border border-[#00e1ff] mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#bfff00]">
            Original Query
          </h2>
          <p className="text-[#bfff00]/80">{result.query.original}</p>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-[#00e1ff] mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#bfff00]">
            Generated SQL
          </h2>
          <pre className="text-[#bfff00]/80 overflow-x-auto">
            {result.query.sql}
          </pre>
        </div>

        <div className="bg-black/50 p-6 rounded-lg border border-[#00e1ff] mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#bfff00]">
            Visualization
          </h2>
          <div className="w-full h-[500px]">{renderVisualization()}</div>
        </div>

        {result.query.relatedQueries?.length > 0 && (
          <div className="bg-black/50 p-6 rounded-lg border border-[#00e1ff]">
            <h2 className="text-xl font-semibold mb-4 text-[#bfff00]">
              Related Queries
            </h2>
            <ul className="space-y-2">
              {result.query.relatedQueries.map((query, index) => (
                <li key={index} className="text-[#bfff00]/80">
                  {query.description}: {query.query}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-sm text-[#bfff00]/60">
          Query executed in {result.executionTime.toFixed(2)}ms
        </div>
      </div>
    </div>
  );
}
