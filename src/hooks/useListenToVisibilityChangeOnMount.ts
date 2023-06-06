import { useEffect, useSyncExternalStore } from "react";
import { getSubscription } from "../utils/getSubscription";

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

  //updating the values when visibility changes
  useEffect(() => {
    setShouldIterateTitles(visibility);
  }, [visibility]);
};
