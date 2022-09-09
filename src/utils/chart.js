import { dates, precipitation, temperature, mock, convertTickDate } from './data';

export const DatasetsMap = {
  precipitation: 0,
  temperature: 1,
  ndvi: 2,
  mock: 3,
};

export const chartData = {
  labels: dates,
  datasets: [
    {
      borderColor: 'skyblue',
      data: precipitation,
      fill: false,
      type: 'line',
      yAxisID: 'yAxisPrecipitation',
    },
    {
      borderColor: 'orange',
      data: temperature,
      fill: false,
      type: 'line',
      yAxisID: 'yAxisTemperature',
    },
    {
      borderColor: 'grey',
      data: [],
      fill: false,
      type: 'line',
      yAxisID: 'yAxisNDVI',
      spanGaps: true,
    },
    {
      borderColor: 'red',
      data: mock,
      fill: false,
      type: 'line',
      showLine: false,
      pointRadius: 0,
      pointHitRadius: 0,
      pointHoverRadius: 0,
    },
  ],
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
