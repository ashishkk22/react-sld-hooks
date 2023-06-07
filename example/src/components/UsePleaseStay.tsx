import React from "react";
import { AnimationType, usePleaseStay } from "react-sld-hooks";

const UsePleaseStay = () => {
  usePleaseStay(["React", "SLD", "Hooks"], AnimationType.LOOP, 10);
  return <div>UsePleaseStay</div>;
};

export default UsePleaseStay;
