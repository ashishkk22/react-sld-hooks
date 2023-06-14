import React, { FC } from "react";
import { usePreviousValue } from "..";

type ExampleProps = {
  initialCounter: number;
};

const Example: FC<ExampleProps> = ({ initialCounter }) => {
  const [counter, setCounter] = React.useState(initialCounter);

  const previousCounter = usePreviousValue(counter);
  return (
    <div>
      <div>Current counter: {counter}</div>
      <div>Previous counter: {previousCounter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Example;
