export const addZero = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export const getMonth = (dateNow: number): number => {
  const month = dateNow / 1000 / 60 / 60 / 24 / 30;
  return month;
};

export const getDay = (dateNow: number): number => {
  const day = dateNow / 1000 / 60 / 60 / 24;
  return day;
};
