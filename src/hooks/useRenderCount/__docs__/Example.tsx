import React from "react";
import useRenderCount from "..";

type ExampleProps = { initialCounter: number };

const Example: React.FC<ExampleProps> = ({ initialCounter }) => {
  const [counter, setCounter] = React.useState(initialCounter);

  const renderCount = useRenderCount();

  return (
    <div>
      <div>current counter : {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>increase</button>
      <div>component render count : {renderCount}</div>
    </div>
  );
};

export default Example;
