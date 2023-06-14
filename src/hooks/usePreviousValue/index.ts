import { useEffect, useRef } from "react";

/**
 * Hook that return the previous value of the provided value
 * @param value current value
 * @returns previous value
 */
export const usePreviousValue = <TValue>(value: TValue) => {
  //initializing ref to store the value
  const ref = useRef<TValue>();

  //updating the ref when value is change
  useEffect(() => {
    ref.current = value;
  }, [value]);

  //return previous value (happens before update in useEffect above)
  return ref.current;
};
