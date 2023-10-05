import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const valuesArray = dataPoints.map((point) => point.value);

  const totalMonthMax = Math.max(...valuesArray);
  // console.log(`maxValue = ${maxValue}`);

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item?.label}
          value={item?.value}
          maxValue={totalMonthMax}
          label={item?.label}
        />
      ))}
    </div>
  );
};

export default Chart;
