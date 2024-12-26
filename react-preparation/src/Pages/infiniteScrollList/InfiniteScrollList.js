import React, { useCallback, useRef, useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

const InfiniteScrollList = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading, hasMore, error } = useInfiniteScroll(
    query,
    pageNumber
  );

  const observer = useRef(null);

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observer(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  return (
    <div>
      <h2>Infinite Scroll List</h2>
      <div>
        <input
          type="text"
          onChange={(event) => handleSearch(event)}
          value={query}
        />
        <div>
          <ul>
            {books.length > 0 &&
              books.map((book, index) => {
                if (books.length === index + 1) {
                  return (
                    <li key={index} ref={lastBookElementRef}>
                      {book}
                    </li>
                  );
                } else {
                  return <li key={index}>{book}</li>;
                }
              })}
            <li>{loading && "Loading..."}</li>
            <li>{error && "Error"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollList;
