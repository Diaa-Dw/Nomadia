export const pluralize = (value: number, word: string) => {
  return value > 1 ? `${word}s` : word;
};
