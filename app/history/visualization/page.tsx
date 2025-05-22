"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface QueryResult {
  columns: string[];
  rows: any[];
}

interface RelatedQuery {
  description: string;
  sql: string;
  returned_data: any;
}

interface VisualizationData {
  graphSqlQuery: string;
  relatedQueries: RelatedQuery[];
  suggestedVisualization: {
    chartType: string;
    chartOptions: {
      xAxisKey: string;
      yAxisKeys: string[];
      dateFormat: string;
    };
    title: string;
    description: string;
  };
}

export default function QueryVisualizationPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const [visualizationData, setVisualizationData] =
    useState<VisualizationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState<string | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [insightsError, setInsightsError] = useState<string | null>(null);

  useEffect(() => {
    const queryId = searchParams.get("id");
    if (queryId && session?.user?.id) {
      fetchVisualizationData(queryId);
    }
  }, [session, searchParams]);

  const fetchVisualizationData = async (queryId: string) => {
    try {
      const response = await fetch(
        `/api/query-history/${queryId}/visualization`
      );
      if (response.ok) {
        const data = await response.json();
        setVisualizationData(data);
      } else {
        throw new Error("Failed to fetch visualization data");
      }
    } catch (err) {
      console.error("Error fetching visualization data:", err);
      toast.error("Failed to load visualization data");
    } finally {
      setLoading(false);
    }
  };

  const generateInsights = async () => {
    if (!visualizationData || !visualizationData.relatedQueries) {
      toast.error("Cannot generate insights: Data not available.");
      return;
    }

    setLoadingInsights(true);
    setInsights(null);
    setInsightsError(null);

    try {
      // Prepare data payload: map related queries to description and results
      const payload = visualizationData.relatedQueries.map(q => ({
        description: q.description,
        sql: q.sql, // Include SQL for context if needed by the LLM
        results: q.returned_data // Assuming returned_data has { columns: [], rows: [] } structure
      }));

      const response = await fetch("/api/generate-insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ relatedQueryData: payload }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate insights");
      }

      const data = await response.json();
      setInsights(data.insights);
    } catch (err: any) {
      console.error("Error generating insights:", err);
      setInsightsError(err.message || "An unexpected error occurred.");
      toast.error(err.message || "Failed to generate insights.");
    } finally {
      setLoadingInsights(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!visualizationData) {
    return (
      <div className="container mx-auto py-25">
        <Card>
          <CardHeader>
            <CardTitle>No Visualization Data Available</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Could not load visualization data for this query.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { suggestedVisualization, relatedQueries } = visualizationData;

  // Transform data for the chart
  const chartData = relatedQueries[0].returned_data.rows.map((row: any) => ({
    month: row.month,
    ...row,
  }));

  return (
    <div className="container mx-auto py-25 space-y-8">
      {/* Main Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>{suggestedVisualization.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 mb-4">
            {suggestedVisualization.description}
          </p>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey={suggestedVisualization.chartOptions.xAxisKey}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  }
                />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [
                    `$${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                  labelFormatter={(label) =>
                    new Date(label).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  }
                />
                <Legend />
                {suggestedVisualization.chartOptions.yAxisKeys.map((key) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={`#${Math.floor(Math.random() * 16777215).toString(
                      16
                    )}`}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Generate Insights Button and Display */}
      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          {!insights && !loadingInsights && !insightsError && (
            <Button onClick={generateInsights} disabled={loadingInsights}>
              Generate Insights from Related Queries
            </Button>
          )}
          {loadingInsights && (
             <div className="space-y-2">
              <p className="text-sm text-gray-500">Loading insights...</p>
            </div>
          )}
          {insightsError && (
             <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{insightsError}</AlertDescription>
            </Alert>
          )}
          {insights && (
            <div className="prose dark:prose-invert max-w-none">
              {/* We might need a markdown renderer here if insights are markdown */}
              <p>{insights}</p>
               <Button onClick={generateInsights} disabled={loadingInsights} variant="outline" size="sm" className="mt-4">
                 Regenerate Insights
               </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Related Queries */}
      <div className="grid gap-4 md:grid-cols-2">
        {relatedQueries.map((query, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{query.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <code className="text-sm">{query.sql}</code>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(query.returned_data.rows[0]).map((key) => (
                          <th
                            key={key}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {query.returned_data.rows
                        .slice(0, 5)
                        .map((row: any, rowIndex: number) => (
                          <tr key={rowIndex}>
                            {Object.values(row).map(
                              (value: any, colIndex: number) => (
                                <td
                                  key={colIndex}
                                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                >
                                  {typeof value === "number"
                                    ? `$${value.toLocaleString()}`
                                    : value}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
