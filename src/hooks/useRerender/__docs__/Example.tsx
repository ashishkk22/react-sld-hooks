import React from "react";
import useRenderCount from "../../useRenderCount";
import useRerender from "..";

const Example = () => {
  const [counter, setCounter] = React.useState(0);
  const renderer = useRerender();
  const renderCount = useRenderCount();
  return (
    <div>
      <div>current counter : {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>increase</button>
      <div>total render : {renderCount}</div>
      <button onClick={() => renderer()}>rerender</button>
    </div>
  );
};

export default Example;
