import { add, format } from 'date-fns';

export const generateDates = (num = 1, startDate = new Date(2022, 5, 8)) => {
  return Array(num)
    .fill(startDate)
    .map((date, index) => format(add(date, { days: index }), 'yyyy-MM-dd'));
};

export const generateValues = (dates, min = 0, max = 1) => {
  return dates.map((date, index) => ({ x: date, y: Math.random() * (max - min) + min, mission: true }));
};

export const convertTickDate = (date) => {
  return format(new Date(date), 'dd/MM');
};

export const MISSIONS = [1, 2, 3, 4, 5, 6];

export const MISSION_INDEXES = [20, 25, 48, 80, 105, 130];

export const SEASONS = [
  { name: 'Planting' },
  { name: 'Early Season' },
  { name: 'Mid Season' },
  { name: 'Late Season' },
  { name: 'Harvest' },
];

const dates2 = generateDates(2);
const temperature2 = generateValues(dates2, 0, 50);

const dates30 = generateDates(30);
const temperature30 = generateValues(dates30, 0, 50);

const dates150 = generateDates(150);
const temperature150 = generateValues(dates150, 0, 50);
const precipitation150 = generateValues(dates150, 0, 100);
const mock150 = generateValues(dates150, 0, 0);

export const dates = dates150;
export const temperature = temperature150;
export const precipitation = precipitation150;
export const mock = mock150;
