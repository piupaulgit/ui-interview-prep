import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedSearchTerm;
};

export default useDebounce;
