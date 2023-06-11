import React, { FC } from "react";
import { usePleaseStay } from "..";
import { AnimationType } from "../../../enums/AnimationTypes";

type ExampleProps = {
  titles: string[];
  animationType: AnimationType;
  interval: number;
};

const Example: FC<ExampleProps> = ({
  titles = ["React", "SLD", "Hooks"],
  animationType = AnimationType.LOOP,
  interval = 20,
}) => {
  usePleaseStay(titles, animationType, interval);

  return <div>Please see doc title when you away from the window</div>;
};

export default Example;
