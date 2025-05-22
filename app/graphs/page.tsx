"use client";

import { useState, useEffect } from "react";
import { Chart } from "@/components/Chart";
import { Table } from "@/components/Table";
import { useSearchParams } from "next/navigation";

interface ChartData {
  [key: string]: string | number;
}

interface QueryConfig {
  query?: string;
  xAxis: string;
  yAxis: string;
  title: string;
  description: string;
  chartType?: "bar" | "pie" | "donut" | "line" | "area";
  stackKey?: string;
  yAxisKeys?: string[];
  data?: ChartData[];
}

export default function Graphs() {
  const searchParams = useSearchParams();
  const queryId = searchParams.get('queryId');
  
  const [chartsData, setChartsData] = useState<{ [key: string]: ChartData[] }>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [queryConfigs, setQueryConfigs] = useState<QueryConfig[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    console.log("QueryConfigs updated:", queryConfigs);
    console.log("ChartsData updated:", chartsData);
  }, [queryConfigs, chartsData]);

  const normalizeChartData = (data: any[]): ChartData[] => {
    if (!Array.isArray(data) || data.length === 0) return [];
    
    return data.map(item => {
      const normalized: ChartData = {};
      
      Object.keys(item).forEach(key => {
        const value = item[key];
        
        if (typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== '') {
          normalized[key] = Number(value);
        } else {
          normalized[key] = value;
        }
      });
      
      return normalized;
    });
  };

  // Helper function to create QueryConfig from API data
  const createQueryConfigFromData = (queryData: any, indexSuffix: string = ""): QueryConfig | null => {
    // Basic validation
    if (!queryData.visualization || !queryData.results || !queryData.results.data || !Array.isArray(queryData.results.data)) {
      console.warn(`Skipping query due to missing/invalid structure:`, queryData.userQuery || `Query ${indexSuffix}`);
      return null;
    }

    let chartType = (queryData.visualization.chartType || "").toLowerCase();
    // Normalize chartType (same logic as before)
    if (chartType.includes("bar")) chartType = "bar";
    else if (chartType.includes("pie")) chartType = "pie";
    else if (chartType.includes("donut")) chartType = "donut";
    else if (chartType.includes("line")) chartType = "line";
    else if (chartType.includes("area") || chartType.includes("stack")) chartType = "area";
    else chartType = "bar";

    const chartDataArray = queryData.results.data;
    const normalizedResults = normalizeChartData(chartDataArray);

    if (normalizedResults.length === 0) {
      console.warn(`No data available for visualization:`, queryData.visualization.title || queryData.userQuery || `Query ${indexSuffix}`);
      // Still create config, chart component will show "no data" message
    }

    const sampleDataKeys = normalizedResults.length > 0 ? Object.keys(normalizedResults[0]) : [];

    // Extract axis keys
    let xAxisKey = queryData.visualization.chartOptions?.xAxisKey ||
                   queryData.visualization.chartOptions?.nameKey;
    let yAxisKey = queryData.visualization.chartOptions?.valueKey;
    let yAxisKeys = queryData.visualization.chartOptions?.yAxisKeys;

    // Guess keys if not provided (same logic as before)
    if (!xAxisKey && sampleDataKeys.length > 0) {
        xAxisKey = sampleDataKeys[0];
        console.log(`Guessed xAxisKey for ${queryData.visualization.title || queryData.userQuery}: ${xAxisKey}`);
    }
    if (!yAxisKey && !yAxisKeys && sampleDataKeys.length > 1) {
         yAxisKey = sampleDataKeys.find(k => k !== xAxisKey && typeof normalizedResults[0]?.[k] === 'number') || sampleDataKeys[1];
         console.log(`Guessed yAxisKey for ${queryData.visualization.title || queryData.userQuery}: ${yAxisKey}`);
    }

    // Validate keys
    if (!xAxisKey || (!yAxisKey && !yAxisKeys)) {
         console.error(`Could not determine valid X/Y axis keys for:`, queryData.visualization.title || queryData.userQuery, { chartOptions: queryData.visualization.chartOptions, sampleKeys: sampleDataKeys });
         // Return null if essential keys are missing, cannot render chart
         return null;
    }

    // Create config
    const queryConfig: QueryConfig = {
      title: queryData.visualization.title || queryData.userQuery || `Query Visualization ${indexSuffix}`,
      description: queryData.visualization.description || "Generated visualization",
      chartType: chartType as "bar" | "pie" | "line" | "area" | "donut",
      xAxis: xAxisKey,
      yAxis: yAxisKey || (yAxisKeys ? yAxisKeys[0] : ''),
      stackKey: yAxisKeys && yAxisKeys.length > 1 ? yAxisKeys[1] : undefined,
      yAxisKeys: yAxisKeys,
      data: normalizedResults // Include data for mapping later
    };
    return queryConfig;
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      setError(null);
      setMessage(null);
      setQueryConfigs([]);
      setChartsData({});

      if (queryId) {
        await fetchQueryById(queryId);
      } else {
        console.log("No queryId found in URL.");
        setMessage("No query selected. Please generate or select a query to visualize.");
        setLoading(false);
      }
    };
    
    init();
  }, [queryId]);
  
  const fetchQueryById = async (id: string) => {
    console.log(`Fetching query history for ID: ${id}`);
    try {
      const response = await fetch(`/api/query-history/${id}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Failed to fetch query with ID ${id}. Status: ${response.status}. ${errorData.error || ""}`);
      }
      
      const data = await response.json();
      console.log("Query history data received:", data);
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const allConfigs: QueryConfig[] = [];
      const allChartsData: { [key: string]: ChartData[] } = {};

      // Process main query
      const mainConfig = createQueryConfigFromData(data, "(Main)");
      if (mainConfig && mainConfig.data) {
        // Check for title uniqueness before adding
        let uniqueTitle = mainConfig.title;
         if (allChartsData[uniqueTitle]) {
             console.warn(`Main query title conflict: "${uniqueTitle}". Appending suffix.`);
             uniqueTitle = `${uniqueTitle} (Main)`;
             mainConfig.title = uniqueTitle;
         }
         allConfigs.push(mainConfig);
         allChartsData[uniqueTitle] = mainConfig.data;
      } else {
         // If main query fails essential processing, we might not want to proceed.
         console.error("Failed to process main query visualization. Essential data might be missing.");
         // Optional: Throw error or set message if main config is crucial
         // throw new Error("Main query data is incomplete or invalid for visualization.");
      }

      // Process related queries
      if (data.relatedQueries && Array.isArray(data.relatedQueries) && data.relatedQueries.length > 0) {
        console.log(`Processing ${data.relatedQueries.length} related queries.`);
        data.relatedQueries.forEach((relatedQueryData: any, index: number) => {
          console.log(`Processing related query #${index + 1}`);
          const relatedConfig = createQueryConfigFromData(relatedQueryData, `(Related ${index + 1})`);

          if (relatedConfig && relatedConfig.data) {
            // Ensure title uniqueness across all charts
            let uniqueTitle = relatedConfig.title;
            let suffixCounter = 1;
             while (allChartsData[uniqueTitle]) {
                 console.warn(`Duplicate title found: "${relatedConfig.title}". Appending counter.`);
                 uniqueTitle = `${relatedConfig.title} (${suffixCounter})`;
                 suffixCounter++;
             }
             relatedConfig.title = uniqueTitle; // Update config with unique title

            allConfigs.push(relatedConfig);
            allChartsData[uniqueTitle] = relatedConfig.data;
          } else {
            console.warn(`Skipping related query #${index + 1} due to processing errors or missing data.`);
          }
        });
      } else {
          console.log("No related queries found or processed.");
      }

      // Check if any configs were successfully created
      if (allConfigs.length === 0) {
          // If after processing main and related, we have nothing, set an error/message
          setMessage("No valid visualizations could be generated from the query data.");
          setLoading(false);
          return; // Stop further processing
      }

      console.log("Final Query Configs:", allConfigs);
      console.log("Final Charts Data:", allChartsData);

      setQueryConfigs(allConfigs);
      setChartsData(allChartsData);
      setLoading(false);

    } catch (err) {
      console.error("Error fetching or processing query by ID:", err);
      setError(err instanceof Error ? err.message : "An error occurred while loading the visualization");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#bfff00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 bg-red-100 p-4 rounded-lg">Error: {error}</div>
      </div>
    );
  }

  if (message) {
     return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400 bg-gray-800 p-6 rounded-lg">{message}</div>
      </div>
    );
  }

  const sortedQueries = [...queryConfigs].sort((a, b) => {
    const order = { pie: 0, donut: 1, line: 2, bar: 3, area: 4 };
    return (order[a.chartType || "bar"] || 99) - (order[b.chartType || "bar"] || 99);
  });

  console.log("Retrieved query configurations:", queryConfigs);

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-black">
      <div className="w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-[#bfff00] text-center">
          Data Visualizations
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {sortedQueries.length === 0 && !loading && !error && !message ? (
             <div className="col-span-1 bg-gray-900 p-6 rounded-lg text-center">
              <p className="text-gray-400">Could not load visualization for the selected query.</p>
            </div>
          ) : (
            sortedQueries.map((queryConfig, index) => {
              const chartDataForTitle = chartsData[queryConfig.title];
              const hasData = Array.isArray(chartDataForTitle) && chartDataForTitle.length > 0;

              console.log(`Rendering chart for ${queryConfig.title}:`, {
                hasData,
                data: chartDataForTitle,
                config: queryConfig
              });

              if (!queryConfig.xAxis || !queryConfig.yAxis) {
                 console.error(`Chart config for "${queryConfig.title}" is missing essential axis keys.`);
                 return (
                    <div key={`${queryConfig.title}-invalid-${index}`}
                         className="col-span-1 bg-gray-900 p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-2 text-white">{queryConfig.title}</h2>
                      <p className="text-sm text-red-400 mb-4">Error: Chart configuration is incomplete (missing axis keys).</p>
                    </div>
                 );
              }

              return (
                <div
                  key={`${queryConfig.title}-${index}`}
                  className="col-span-1 bg-gray-900 p-6 rounded-lg w-full"
                >
                  <h2 className="text-xl font-semibold mb-2 text-white">{queryConfig.title}</h2>
                  <p className="text-sm text-gray-400 mb-4">{queryConfig.description}</p>
                  
                  {hasData ? (
                    <div className="w-full">
                      <div className="w-full">
                        <Chart
                          data={chartDataForTitle}
                          xAxis={{
                            key: queryConfig.xAxis,
                            label:
                              queryConfig.xAxis.charAt(0).toUpperCase() +
                              queryConfig.xAxis.slice(1).replace(/_/g, ' '),
                            formatter: (value) => String(value),
                          }}
                          yAxis={{
                            key: queryConfig.yAxis,
                            label: queryConfig.yAxis
                              ? queryConfig.yAxis
                                  .split("_")
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join(" ")
                              : "Value",
                            formatter: (value) => {
                              const num = Number(value);
                              if (isNaN(num)) return String(value);

                              if (
                                queryConfig.yAxis?.includes("salary") ||
                                queryConfig.yAxis?.includes("profit") ||
                                queryConfig.yAxis?.includes("revenue") ||
                                queryConfig.yAxis?.includes("price") ||
                                queryConfig.yAxis?.includes("cost") ||
                                queryConfig.yAxis?.includes("spent") ||
                                queryConfig.yAxis?.includes("value")
                              ) {
                                 return `$${num.toLocaleString(undefined, { maximumFractionDigits: num % 1 === 0 ? 0 : 2 })}`;
                              }
                              return num.toLocaleString(undefined, { maximumFractionDigits: num % 1 === 0 ? 0 : 2 });
                            },
                          }}
                          title={queryConfig.title}
                          description={queryConfig.description}
                          color="#4ade80"
                          chartType={queryConfig.chartType || "bar"}
                          stackKey={queryConfig.stackKey}
                          yAxisKeys={queryConfig.yAxisKeys}
                          margin={{ top: 20, right: 30, left: 55, bottom: 25 }}
                        />
                      </div>
                      
                      <div className="mt-6 w-full">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-md font-medium text-white">Raw Data</h3>
                          <span className="text-xs text-gray-400">({chartDataForTitle.length} records)</span>
                        </div>
                        <Table data={chartDataForTitle} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-gray-400">No data available to display for this chart.</div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
