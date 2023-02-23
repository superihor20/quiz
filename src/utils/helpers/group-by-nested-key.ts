type ValueOf<T> = T[keyof T];

export function groupByNestedKey<T extends Record<string, any>>(
  arr: T[],
  key: string,
): Record<ValueOf<T>, T[]> {
  return arr.reduce((groups, item) => {
    const keys = key.split('.');
    const groupName = keys.reduce((obj, key) => obj[key], item) as ValueOf<T>;

    if (!groups[groupName]) {
      groups[groupName] = [];
    }

    groups[groupName].push(item);

    return groups;
  }, {} as Record<ValueOf<T>, T[]>);
}
