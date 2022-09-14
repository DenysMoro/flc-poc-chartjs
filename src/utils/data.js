import { add, format } from 'date-fns';

// '#6DC369', '#F9BF5C', '#E06B71'

const FH_COLORS = ['#6DC369', '#F9BF5C', '#E06B71'];
const FH_THRESHOLDS = [0, 0.07, 0.18, 1];
const FH_THRESHOLDS_LENGTH = 20;
const FH_THRESHOLD_STEP = 1 / FH_THRESHOLDS_LENGTH;
const FH_COLORS20 = [
  '#D2736E',
  '#D47C6C',
  '#D6856A',
  '#D88E68',
  '#DA9766',
  '#DCA064',
  '#DEA962',
  '#E0B260',
  '#E2BB5E',
  '#E4C45D',
  '#E6CD5B',
  '#DDCD5C',
  '#D4CD5E',
  '#CBCD60',
  '#C2CD61',
  '#B9CD63',
  '#AFCB6B',
  '#A5CA73',
  '#9BC87B',
  '#91C683',
  '#6DB25B',
];
const FH_THRESHOLDS20 = Array(FH_THRESHOLDS_LENGTH + 1)
  .fill(0)
  .map((item, index, items) => {
    if (!index) return 0;

    return FH_THRESHOLD_STEP * index;
  });

export const generateDates = (num = 1, startDate = new Date(2022, 5, 8)) => {
  return Array(num)
    .fill(startDate)
    .map((date, index) => format(add(date, { days: index }), 'yyyy-MM-dd'));
};

export const randomizeValue = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
};

export const generateValues = (dates, min = 0, max = 1) => {
  return dates.map((date) => ({ x: date, y: randomizeValue(min, max), mission: true }));
};

export const generateNDVIValues = (dates, min = 0, max = 1) => {
  const values = dates.map((date) => {
    const score = randomizeValue(min, max);
    let color = FH_COLORS20[0];

    FH_THRESHOLDS20.forEach((num, index) => {
      if (score >= num && score <= FH_THRESHOLDS20[index + 1]) {
        color = FH_COLORS20[index];
      }
    });

    return { score, color, x: date, y: score };
  });

  console.log(values);
  console.log(FH_THRESHOLDS20);

  return values;
};

export const convertTickDate = (date) => {
  return format(new Date(date), 'dd/MM');
};

export const MISSIONS = [1, 2, 3, 4, 5, 6];

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
const precipitation30 = generateValues(dates30, 0, 100);

const dates60 = generateDates(60);
const ndvi60 = generateNDVIValues(dates60, 0, 1);

const dates150 = generateDates(150);
const temperature150 = generateValues(dates150, 0, 50);
const precipitation150 = generateValues(dates150, 0, 100);
const mock150 = generateValues(dates150, 0, 0);
// const ndvi150 = generateNDVIValues(dates150, 0, 1);

const dates300 = generateDates(300);
const temperature300 = generateValues(dates300, 0, 50);
const precipitation300 = generateValues(dates300, 0, 100);
const mock300 = generateValues(dates300, 0, 0);

export const dates = dates150;
export const temperature = temperature150;
export const precipitation = precipitation150;
export const ndvi = ndvi60;
export const mock = mock150;
export const MISSION_INDEXES = [20, 25, 35, 70, 85, 135];
