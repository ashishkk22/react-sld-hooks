import React from "react";

/**
 * A hook to force render a component
 * @example
 * const forceRender = useRerender();
 * forceRender();
 * @returns {forceRender} returns a function to force render a component
 */

const useRerender = () => {
  const [, forceRender] = React.useReducer((s) => s + 0.00001, 0);

  //return the useReducer's dispatch that update its state to force render
  return forceRender;
};

export default useRerender;
