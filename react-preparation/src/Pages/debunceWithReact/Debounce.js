import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Perform search with:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced value: {debouncedSearchTerm}</p>
    </div>
  );
};

export default Debounce;
