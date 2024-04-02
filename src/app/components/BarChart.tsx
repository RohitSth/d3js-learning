"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [10, 20, 30, 40, 50];

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 200);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d) => 200 - 10 * d)
      .attr("width", 65)
      .attr("height", (d) => d * 10)
      .attr("fill", "blue");
  }, []);

  return <div ref={chartRef}></div>;
};

export default BarChart;
