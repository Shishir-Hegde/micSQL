"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface QueryResult {
  columns: string[];
  rows: any[];
}

interface QueryHistory {
  id: string;
  userQuery: string;
  sqlQuery: string;
  executionTime: number | null;
  successful: boolean;
  errorMessage: string | null;
  createdAt: string;
  results: QueryResult | null;
}

export default function QueryHistoryPage() {
  const { data: session } = useSession();
  const [history, setHistory] = useState<QueryHistory[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<QueryHistory | null>(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchHistory();
    }
  }, [session]);

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        `/api/query-history/user/${session?.user?.id}`
      );
      if (response.ok) {
        const data = await response.json();
        setHistory(data || []);
      }
    } catch (err) {
      console.error("Error fetching history:", err);
      toast.error("Failed to fetch query history");
    }
  };

  const handleShowResults = (query: QueryHistory) => {
    setSelectedQuery(query);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="container mx-auto py-25">
      <Card>
        <CardHeader>
          <CardTitle>Query History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {history.map((query) => (
              <Card key={query.id}>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Natural Language Query:</p>
                        <p className="text-sm text-gray-500">
                          {query.userQuery}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatDate(query.createdAt)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">SQL Query:</p>
                      <p className="text-sm text-gray-500">{query.sqlQuery}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        {query.executionTime && (
                          <p className="text-sm text-gray-500">
                            Execution Time: {query.executionTime}ms
                          </p>
                        )}
                        {!query.successful && (
                          <p className="text-sm text-red-500">
                            Error: {query.errorMessage}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => handleShowResults(query)}
                      >
                        Show Results
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedQuery && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Query Results</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
              {JSON.stringify(selectedQuery.results, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
