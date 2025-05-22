import React, { useState } from 'react';

interface TableProps {
  data: any[];
  title?: string;
}

export const Table = ({ data, title }: TableProps) => {
  const [visibleRows, setVisibleRows] = useState(10);
  
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-gray-900 rounded-lg p-4 mt-2">
        <p className="text-gray-400 text-center">No data available</p>
      </div>
    );
  }

  // Get column headers from the first data item
  const columns = Object.keys(data[0]);
  
  // Handle downloading data as CSV
  const downloadCSV = () => {
    const headers = columns.join(',');
    const csvRows = data.map(row => 
      columns.map(column => {
        const value = row[column];
        // Escape commas and quotes for CSV format
        const stringValue = String(value);
        return stringValue.includes(',') || stringValue.includes('"') 
          ? `"${stringValue.replace(/"/g, '""')}"` 
          : stringValue;
      }).join(',')
    );
    
    const csvContent = [headers, ...csvRows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${title || 'data'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const showMoreRows = () => {
    setVisibleRows(prev => Math.min(prev + 10, data.length));
  };
  
  const showAllRows = () => {
    setVisibleRows(data.length);
  };

  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 mt-2 overflow-x-auto">
      {title && <h3 className="text-white font-medium mb-3">{title}</h3>}
      
      <div className="flex justify-end w-full mb-2">
        <button 
          onClick={downloadCSV}
          className="text-xs bg-gray-800 hover:bg-gray-700 text-[#bfff00] px-3 py-1 rounded transition-colors"
        >
          Download CSV
        </button>
      </div>
      
      <table className="w-full divide-y divide-gray-700">
        <thead>
          <tr>
            {columns.map((column) => (
              <th 
                key={column}
                className="px-3 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                {column.replace(/_/g, ' ')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {data.slice(0, visibleRows).map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
              {columns.map((column) => (
                <td 
                  key={`${rowIndex}-${column}`}
                  className="px-3 py-2 text-xs text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs"
                  title={String(row[column])}
                >
                  {String(row[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {visibleRows < data.length && (
        <div className="mt-3 flex space-x-2 justify-center">
          <button 
            onClick={showMoreRows}
            className="text-xs bg-gray-800 hover:bg-gray-700 text-[#bfff00] px-3 py-1 rounded transition-colors"
          >
            Show 10 More
          </button>
          <button 
            onClick={showAllRows}
            className="text-xs bg-gray-800 hover:bg-gray-700 text-[#bfff00] px-3 py-1 rounded transition-colors"
          >
            Show All ({data.length} rows)
          </button>
        </div>
      )}
    </div>
  );
}; 