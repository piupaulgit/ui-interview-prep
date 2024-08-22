import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (totalDuration) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  let timerRef = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }, [setIsRunning, setSeconds]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(totalDuration);
  }, [setIsRunning, setSeconds]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  return {
    isRunning,
    start,
    stop,
    seconds,
    totalDuration,
  };
};

export default useTimer;
