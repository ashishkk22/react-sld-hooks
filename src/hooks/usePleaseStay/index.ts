import { useCallback, useState } from "react";
import { useTitleChangeEffect } from "./useTitleChangeEffect";
import { useListenToVisibilityChangeOnMount } from "./useListenToVisibilityChangeOnMount";
import { AnimationType } from "../../enums/AnimationTypes";

/**
 * Make title animate when user is away from the webpage
 * @param titles array for the titles to change.
 * @param animationType animation type with title when user is away from the tab
 * @param interval Interval time for the animation
 */

export const usePleaseStay = (
  titles: string[],
  animationType: AnimationType,
  interval: number
) => {
  const [shouldIterateTitles, setShouldIterateTitles] = useState(false);

  //sets the setShouldIterateTitles value whenever page visibility is lost along with removing the event listener in cleanup as well.
  useListenToVisibilityChangeOnMount(setShouldIterateTitles);

  //Modifies the document title of the page whenever shouldIterateTitles is true
  useTitleChangeEffect(titles, shouldIterateTitles, animationType, interval);
};
