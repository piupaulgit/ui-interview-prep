import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./page.css";

const Page = () => {
  const [data, setData] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNum, rowsPerPage) => {
    const startIndex = (pageNum - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setCurrentPageData(data.slice(startIndex, endIndex));
    setRowsPerPage(rowsPerPage);
  };

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalDataCount={data.length}
        dataPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
