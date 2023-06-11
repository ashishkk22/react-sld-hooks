import React, { FC, useState } from "react";
import { useInterval } from "..";
import { AnimationType } from "../../../enums/AnimationTypes";

type ExampleProps = {
  callback: () => void;
  interval: number;
  shouldRun: boolean;
};

const Example: FC<ExampleProps> = ({ callback, interval, shouldRun }) => {
  const [counter, setCounter] = useState(0);

  useInterval(() => setCounter((prev) => prev + 1), interval, shouldRun);

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>Counter is going to increase on every interval</div>
      <div>{counter}</div>
      <button onClick={reset}>Reset counter</button>
    </div>
  );
};

export default Example;
