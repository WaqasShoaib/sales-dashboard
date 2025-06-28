"use client";
import React, { useState } from "react";
import { salesData } from "@/data/salesData";
import ChartTypeSwitcher from "../molecules/ChartTypeSwitcher";
import FilterInput from "../molecules/FilterInput";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const years = [2022, 2023, 2024];

const SalesChart = () => {
  const [chartType, setChartType] = useState("Bar");
  const [threshold, setThreshold] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2024);

  const filtered = salesData.filter(
    (s) => s.year === selectedYear && s.sales >= threshold
  );

  console.log("Filtered data:", filtered); // Debug log
  console.log("Selected year:", selectedYear); // Debug log
  console.log("Threshold:", threshold); // Debug log

  const renderChart = () => {
    if (filtered.length === 0) {
      return (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No data available for the selected filters</p>
        </div>
      );
    }

    switch (chartType) {
      case "Bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filtered}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "Line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filtered}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "Pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={filtered}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {filtered.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Sales ({selectedYear})</h2>
      <div className="flex gap-2 mb-4">
        {years.map((y) => (
          <button
            key={y}
            className={`px-2 py-1 rounded ${
              selectedYear === y ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedYear(y)}
          >
            {y}
          </button>
        ))}
      </div>
      <ChartTypeSwitcher chartType={chartType} setChartType={setChartType} />
      <FilterInput threshold={threshold} setThreshold={setThreshold} />
      
      {/* Debug info */}
      <div className="mb-4 text-sm text-gray-600">
        <p>Showing {filtered.length} records</p>
      </div>
      
      {renderChart()}
    </div>
  );
};

export default SalesChart;