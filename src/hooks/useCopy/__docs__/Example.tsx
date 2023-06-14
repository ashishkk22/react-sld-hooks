import React, { FC } from "react";
import useCopy from "..";

type ExampleProps = {
  value: string;
};

const Example: FC<ExampleProps> = ({ value }) => {
  const { text, copy, paste } = useCopy();

  return (
    <div>
      <div>
        {/** setting the initial state */}
        <input type="text" value={value} />
        {/** copying the value to the clipboard */}
        <button onClick={() => copy(value)}>copy </button>
      </div>
      <div>
        <p>Select me and copy (click paste) </p>
        {/** pasting the value from the clipboard */}
        <input type="text" value={text} />
        <button onClick={() => paste()}>paste</button>
      </div>
    </div>
  );
};

export default Example;
