export const getStoreField = <TStore extends object, TKey extends keyof TStore>(key: TKey) => {
  return (store: TStore): TStore[TKey] => {
    return store[key];
  };
};

export const getMultipleStoreFields = <TStore extends object, TKey extends keyof TStore>(
  keys: TKey[],
) => {
  return (store: TStore): Pick<TStore, TKey> => {
    const fields = {} as Pick<TStore, TKey>;

    for (const key of keys) {
      fields[key] = store[key];
    }

    return fields;
  };
};
