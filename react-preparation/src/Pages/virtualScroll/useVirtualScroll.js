import { useCallback, useState, useRef } from "react";

const useVirtualScroll = (data, itemHeight, containerHeight) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    Math.ceil(containerHeight / itemHeight)
  );
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const scrollTop = containerRef.current.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.ceil(containerHeight / itemHeight);

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  }, [itemHeight, containerHeight]);

  const visibleItem = data.slice(startIndex, endIndex);

  return {
    totalHeight: itemHeight * data.length,
    startIndex,
    endIndex,
    handleScroll,
    visibleItem,
    containerRef,
  };
};

export default useVirtualScroll;
