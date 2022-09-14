import { DatasetsMap } from './chart';

export const buildColors = (ndviData, startIndex, endIndex) => {
  const colors = [];
  const data = ndviData.slice(startIndex, endIndex);

  data.forEach(({ color }) => {
    const lastColor = colors[colors.length - 1];

    if (color !== lastColor) {
      colors.push(color);
    }
  });

  if (!colors) {
    return false;
  }

  return colors.join(',');
};

export const buildGradient = (chartData, missionIndexes) => {
  const ndvi = chartData.datasets[DatasetsMap.ndvi].data;

  return `linear-gradient(to right, ${buildColors(ndvi)})`;
};
