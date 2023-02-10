export const isItIdFromUrl = (id: string) => {
  return id !== 'new' && !Number.isNaN(Number(id));
};
