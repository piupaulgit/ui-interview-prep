import { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (query, pageNumber) => {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clear the books array when the query changes
    setBooks([]);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://openlibrary.org/search.json", {
          params: { q: query, page: pageNumber },
          signal: controller.signal, // Attach the AbortController signal
        });

        setBooks((prevBooks) => {
          return [
            ...new Set([
              ...prevBooks,
              ...response.data.docs.map((b) => b.title),
            ]),
          ];
        });

        setHasMore(response.data.docs.length > 0);
      } catch (err) {
        if (err.name === "CanceledError") return; // Ignore cancellation errors
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cleanup on unmount or query change
  }, [query, pageNumber]);

  return { books, loading, error, hasMore };
};

export default useInfiniteScroll;
