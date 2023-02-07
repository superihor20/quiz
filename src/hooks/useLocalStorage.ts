import { useEffect, useState } from 'react';

import { localStorageKeys } from '../utils/enums/local-storage-keys';

export const useLocalStorage = <S>(
  key: localStorageKeys,
  initialValue?: S,
): [S, (value: S) => void, boolean] => {
  const [isLoading, setIsLoading] = useState(true);
  const [storedValue, setStoredValue] = useState<S>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: S) => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return [storedValue, setValue, isLoading];
};
