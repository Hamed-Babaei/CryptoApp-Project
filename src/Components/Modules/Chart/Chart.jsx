import React from "react";
import "./Chart.css";
export default function Chart({ Chart, setChart }) {
  return (
    <div className="container">
      <span className="cross" onClick={() => setChart(null)}>
        X
      </span>
      <div className="chart"></div>
    </div>
  );
}
