import { DependencyList, EffectCallback, useEffect, useState } from "react";

export const useNoFirstTimeEffect = (
  callback: EffectCallback,
  deps?: DependencyList
) => {
  const [isfirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    if (isfirstTime) setIsFirstTime(false);
    if (!isfirstTime) {
      const unsubscribe = callback();
      return unsubscribe;
    }
  }, deps);
};
