import React, { useEffect, useState } from "react";
import Table from "./Table";

const GenerateTable = () => {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  const generateTable = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const rows = data.get("rows");
    const columns = data.get("columns");
    setRows(rows);
    setColumns(columns);
  };

  return (
    <div className="dynamic-table-generator">
      <h2>Generate Table with rows and columns</h2>
      <form onSubmit={generateTable}>
        <div>
          <label>Rows</label>
          <input
            type="number"
            min={1}
            id="rows"
            name="rows"
            defaultValue={rows}
          />
        </div>
        <div>
          <label>Columns</label>
          <input
            type="number"
            min={1}
            id="columns"
            name="columns"
            defaultValue={columns}
          />
        </div>
        <div>
          <button>Generate Table</button>
        </div>
      </form>
      {Boolean(rows) && Boolean(columns) && (
        <div className="table">
          <Table rows={rows} columns={columns} />
        </div>
      )}
    </div>
  );
};

export default GenerateTable;
