import { useEffect, useState } from "react";

const useCountDown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft;
};
export default useCountDown;
