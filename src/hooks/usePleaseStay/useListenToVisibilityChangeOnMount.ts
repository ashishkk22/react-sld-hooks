import { useEffect, useSyncExternalStore } from "react";
import { getSubscription } from "../../utils/getSubscription";

/**
 * Make call on the visibility change so that we can decide to change the document title
 * @param setShouldIterateTitles Function to be called when visibility changes
 */
export const useListenToVisibilityChangeOnMount = (
  setShouldIterateTitles: (visibility: boolean) => void
) => {
  //gives the subscription
  const subscription = getSubscription("visibilitychange", document);

  //give the visible value
  const visibility = useSyncExternalStore(
    subscription,
    () => document.visibilityState !== "visible"
  );

  useEffect(() => {
    setShouldIterateTitles(visibility);
  }, [visibility]);
};
