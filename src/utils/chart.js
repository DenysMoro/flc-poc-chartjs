import { dates, precipitation, temperature, mock, convertTickDate, ndvi } from './data';

export const DatasetsMap = {
  precipitation: 0,
  temperature: 1,
  ndvi: 2,
  mock: 3,
};

const lineStyles = {
  fill: false,
  type: 'line',
  borderWidth: 2,
  pointHitRadius: 10,
  pointRadius: 0,
  pointBorderWidth: 0,
  pointHoverRadius: 0,
  pointBackgroundColor: '#000',
  pointBorderColor: '#000',
};

export const chartData = {
  labels: dates,
  datasets: [
    {
      borderColor: 'skyblue',
      data: precipitation,
      yAxisID: 'yAxisPrecipitation',
      ...lineStyles,
    },
    {
      borderColor: 'orange',
      data: temperature,
      yAxisID: 'yAxisTemperature',
      ...lineStyles,
    },
    {
      borderColor: 'grey',
      data: ndvi,
      yAxisID: 'yAxisNDVI',
      spanGaps: true,
      ...lineStyles,
    },
    {
      borderColor: 'red',
      data: mock,
      showLine: false,
      ...lineStyles,
      pointHitRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const tooltipOptions = {
  enabled: false,
  custom(tooltipModel) {
    const tooltipEl = document.getElementById('chartjs-tooltip');

    // Hide if no tooltip
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = '0';
      return;
    }

    // Display, position, and set styles for font
    tooltipEl.style.opacity = '1';
    tooltipEl.style.left = tooltipModel.caretX + 'px';
    tooltipEl.style.top = tooltipModel.caretY + 'px';
  },
};

export const chartOptions1 = {
  // layout: {
  //   padding: {
  //     bottom: 100,
  //   },
  // },
  elements: {
    line: {
      tension: 0, // disables bezier curves
    },
  },
  animation: {
    duration: 0, // general animation time
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
    drawOnChartArea: false,
  },
  tooltips: tooltipOptions,
  scales: {
    yAxes: [
      {
        id: 'yAxisNDVI',
        gridLines: {
          display: false,
          drawBorder: false,
          tickMarkLength: 5,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 1,
        },
      },
      {
        id: 'yAxisTemperature',
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
        },
      },
      {
        id: 'yAxisPrecipitation',
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
          offsetGridLines: false,
        },
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          drawBorder: false,
          maxRotation: 75,
          minRotation: 75,
          padding: 0,
          callback(value, index) {
            if (index % 7 === 0 || index === 0) {
              return convertTickDate(value);
            }

            return null;
          },
        },
      },
    ],
  },
};

export const chartOptions2 = {
  // layout: {
  //   padding: {
  //     bottom: 100,
  //   },
  // },
  elements: {
    line: {
      tension: 0, // disables bezier curves
    },
  },
  animation: {
    duration: 0, // general animation time
  },
  responsive: false,
  maintainAspectRatio: false,
  legend: {
    display: false,
    drawOnChartArea: false,
  },
  tooltips: tooltipOptions,
  scales: {
    yAxes: [
      {
        id: 'yAxisNDVI',
        gridLines: {
          display: false,
          drawBorder: false,
          tickMarkLength: 5,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 1,
          padding: 0,
        },
      },
      {
        id: 'yAxisTemperature',
        gridLines: {
          display: false,
          drawBorder: false,
          tickMarkLength: 5,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          padding: 0,
        },
      },
      {
        id: 'yAxisPrecipitation',
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          padding: 0,
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
          offsetGridLines: false,
        },
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          drawBorder: false,
          maxRotation: 75,
          minRotation: 75,
          padding: 0,
          callback(value) {
            return convertTickDate(value);
          },
        },
      },
    ],
  },
};
