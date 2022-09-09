import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions1, chartOptions2, chartData, DatasetsMap } from './utils/chart';
import { MISSION_INDEXES, MISSIONS, SEASONS } from './utils/data';
import './styles.scss';

const CONTAINER_PADDING = 100;

function App() {
  const chartWidth = useRef(chartData.labels.length * 25).current;
  const contentWidth = useRef(chartWidth + CONTAINER_PADDING * 2).current;
  const [chartLabelsPosition, setChartLabelsPosition] = useState({
    [DatasetsMap.precipitation]: { x: 0, y: 0 },
    [DatasetsMap.temperature]: { x: 0, y: 32 },
    [DatasetsMap.ndvi]: { x: 0, y: 56 },
  });
  const [showAllDays, setShowAllDays] = useState(false);
  const [missionPositions, setMissionPositions] = useState({});
  const chart = useRef(null);

  useEffect(() => {
    positionLabels();
    positionMissions();
  }, [showAllDays]);

  const positionLabels = useCallback(() => {
    const precipitationItem = chart.current.chartInstance.getDatasetMeta(DatasetsMap.precipitation).data[0];
    const tempItem = chart.current.chartInstance.getDatasetMeta(DatasetsMap.temperature).data[0];

    setChartLabelsPosition((prevState) => ({
      ...prevState,
      [DatasetsMap.precipitation]: {
        x: precipitationItem._model.x,
        y: precipitationItem._model.y,
      },
      [DatasetsMap.temperature]: {
        x: tempItem._model.x,
        y: tempItem._model.y,
      },
    }));
  }, []);

  const positionMissions = useCallback(() => {
    const dataset = chart.current.chartInstance.getDatasetMeta(DatasetsMap.mock).data;
    const position = {};

    MISSION_INDEXES.forEach((missionIndex, index) => {
      const point = dataset[missionIndex];

      position[index + 1] = point._model.x;
    });

    setMissionPositions(position);
  }, []);

  const onShowAllDates = useCallback(() => {
    setShowAllDays((prevState) => !prevState);
  }, []);

  const options = showAllDays ? chartOptions2 : chartOptions1;
  const firstPointX = chartLabelsPosition[0].x;
  const plantingSeasonWidth = CONTAINER_PADDING + firstPointX;
  const earlySeasonWidth = (missionPositions[3] || 0) - firstPointX;
  const midSeasonWidth = (missionPositions[5] || 0) - earlySeasonWidth - firstPointX;

  return (
    <>
      <button type="submit" onClick={onShowAllDates}>
        Show all dates
      </button>
      <div className="timeline" style={{ width: showAllDays ? contentWidth : 'auto' }}>
        <div className="missions-container">
          {MISSIONS.map((mission) => (
            <div key={mission} className="mission" style={{ left: missionPositions[mission] }}>
              <div className="mission-header">{mission}</div>
              <div className="mission-line"></div>
            </div>
          ))}
        </div>
        <div className="chart-container">
          <div className="chart-labels">
            <span className="precipitation" style={{ top: chartLabelsPosition[DatasetsMap.precipitation].y }}>
              Precipitation
            </span>
            <span className="temperature" style={{ top: chartLabelsPosition[DatasetsMap.temperature].y }}>
              Temperature
            </span>
            {false && (
              <span className="ndvi" style={{ top: chartLabelsPosition[DatasetsMap.ndvi].y }}>
                NDVI
              </span>
            )}
          </div>
          <div>
            <Line type="line" redraw ref={chart} data={chartData} options={options} width={chartWidth} height={240} />
          </div>
        </div>
        <div className="seasons-container">
          <div className="season static" style={{ width: plantingSeasonWidth }}>
            {SEASONS[0].name}
          </div>
          <div className="season" style={{ width: earlySeasonWidth }}>
            {SEASONS[1].name}
          </div>
          <div className="season" style={{ width: midSeasonWidth }}>
            {SEASONS[2].name}
          </div>
          <div className="season">{SEASONS[3].name}</div>
          <div className="season last static">{SEASONS[SEASONS.length - 1].name}</div>
        </div>
      </div>
    </>
  );
}

export default App;
