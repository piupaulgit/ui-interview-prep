import React, { useEffect, useState } from "react";
import "../page.css";

const Pagination = ({ totalDataCount, dataPerPage, onPageChange }) => {
  const [pageCount, setPageCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(dataPerPage);

  useEffect(() => {
    const totalPageCount = Math.ceil(totalDataCount / rowsPerPage);
    setPageCount(
      Array(totalPageCount)
        .fill()
        .map((_, i) => i + 1)
    );
  }, [totalDataCount, rowsPerPage]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    onPageChange(pageNum, rowsPerPage);
  };

  const handleChangeRowsPerPage = (e) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to first page when rows per page changes
    onPageChange(1, newRowsPerPage); // Notify parent about the change
  };

  return (
    <div className="pagination">
      {pageCount.length > 0 && (
        <>
          {/* Dropdown to select rows per page */}
          <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>

          {/* Page numbers */}
          <div>
            {pageCount.map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={pageNum === currentPage ? "active" : ""}
              >
                {pageNum}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
