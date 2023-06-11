import { useEffect, useRef } from "react";

/**
 * Call the function on interval
 * @param callback function to be executed on every interval
 * @param interval to run the callback function on this interval
 * @param shouldRun to set the interval to run or not
 */

export const useInterval = (
  callback: () => void,
  interval: number,
  shouldRun: boolean
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!shouldRun || !interval) {
      return;
    }
    const id = setInterval(() => callbackRef.current(), interval);

    return () => clearInterval(id);
  }, [interval, shouldRun]);
};
