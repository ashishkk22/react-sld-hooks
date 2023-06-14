import React from "react";

/**
 * A hook to count the number of re renders of a component
 * @example
 * const renderCount = useRenderCount();
 * console.log(renderCount); => 1
 */

const useRenderCount = () => {
  const renderCount = React.useRef(0);

  return ++renderCount.current;
};

export default useRenderCount;
