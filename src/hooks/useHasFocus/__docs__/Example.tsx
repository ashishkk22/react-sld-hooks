import React from "react";
import useHasFocus from "..";

const Example = () => {
  //gives us a boolean value
  const hasFocus = useHasFocus();

  return (
    <div>
      <div>click me</div>
      <div>{hasFocus ? "document is focused" : "document is not focused"}</div>
    </div>
  );
};

export default Example;
