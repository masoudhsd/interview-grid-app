"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";

export default function Grid({ gridData }) {
  const [rowData, setRowData] = useState([
    { columnID: "", title: "", ColumnType: 0 },
  ]);

  useEffect(() => {
    const rowData = gridData?.columns.map((col) => {
      return {
        columnID: col.columnID,
        title: col.title,
        IsVisible: col.IsVisible,
      };
    });
    setRowData(rowData);
  }, [gridData]);

  const [colDefs, setColDefs] = useState([
    { field: "columnID" },
    { field: "title" },
    { field: "IsVisible" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}
