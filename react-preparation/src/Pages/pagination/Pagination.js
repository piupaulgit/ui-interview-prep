import React, { useEffect, useState } from "react";
import { users } from "./users.js";
import "./pagination.css";

const OPTIONS = [5, 10, 20];
const PaginationComponent = ({
  totalCount,
  onPageChange,
  onPageSizeChange,
  pageNumber,
  pageSize,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="pagination-component">
      <div>
        <select
          onChange={(event) => onPageSizeChange(Number(event.target.value))}
        >
          {OPTIONS.map((op, index) => {
            return (
              <option key={index} value={op}>
                Show {op}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => onPageChange(pageNumber - 1)}
        >
          Prev
        </button>
        <span>
          {pageNumber} of {totalPages}
        </span>
        <button
          disabled={pageNumber === totalPages}
          onClick={() => onPageChange(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const DataTable = ({ data }) => {
  const [pageSize, setPageSize] = useState(OPTIONS[0]);
  const [pageNumber, setPageNumber] = useState(1);

  const paginatedData = data.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );

  useEffect(() => {
    setPageNumber(1);
  }, [pageSize]);

  return (
    <div className="pagination-datatable">
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationComponent
        pageSize={pageSize}
        totalCount={data.length}
        pageNumber={pageNumber}
        onPageChange={(newPage) => setPageNumber(newPage)}
        onPageSizeChange={(newSize) => setPageSize(newSize)}
      />
    </div>
  );
};

const Pagination = () => {
  return (
    <div>
      <h2>Pagination</h2>
      <DataTable data={users} />
    </div>
  );
};

export default Pagination;
