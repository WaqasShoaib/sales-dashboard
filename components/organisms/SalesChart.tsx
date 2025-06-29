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

// TypeScript interface for Pie chart label props
interface PieLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
  month?: string;
  sales?: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"];

const years = [2022, 2023, 2024];

const SalesChart = () => {
  const [chartType, setChartType] = useState("Bar");
  const [threshold, setThreshold] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2024);

  const filtered = salesData.filter(
    (s) => s.year === selectedYear && s.sales >= threshold
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const renderChart = () => {
    if (filtered.length === 0) {
      return (
        <div className="flex items-center justify-center h-80 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500 text-lg">No data available</p>
            <p className="text-gray-400 text-sm">Try lowering the sales threshold</p>
          </div>
        </div>
      );
    }

    const commonProps = {
      margin: { top: 20, right: 30, left: 20, bottom: 5 }
    };

    switch (chartType) {
      case "Bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filtered} {...commonProps}>
              <XAxis dataKey="month" />
              <YAxis tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Sales']}
                labelFormatter={(label: string) => `Month: ${label}`}
              />
              <Legend />
              <Bar dataKey="sales" fill="#3B82F6" name="Monthly Sales" />
            </BarChart>
          </ResponsiveContainer>
        );
        
      case "Line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filtered} {...commonProps}>
              <XAxis dataKey="month" />
              <YAxis tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Sales']}
                labelFormatter={(label: string) => `Month: ${label}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Monthly Sales"
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
        
      case "Pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={filtered}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={(entry: PieLabelProps) => {
                  const month = entry.month || 'Unknown';
                  const percent = entry.percent || 0;
                  return `${month}: ${(percent * 100).toFixed(1)}%`;
                }}
              >
                {filtered.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [formatCurrency(value), 'Sales']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
        
      default:
        return null;
    }
  };

  const totalSales = filtered.reduce((sum, item) => sum + item.sales, 0);
  const averageSales = filtered.length > 0 ? totalSales / filtered.length : 0;
  const maxSales = filtered.length > 0 ? Math.max(...filtered.map(item => item.sales)) : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Sales Dashboard - {selectedYear}
        </h2>
        <p className="text-gray-600">
          Interactive sales analytics with multiple chart visualizations
        </p>
      </div>

      {/* Year Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Year</h3>
        <div className="flex gap-3">
          {years.map((year) => (
            <button
              key={year}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedYear === year
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <ChartTypeSwitcher chartType={chartType} setChartType={setChartType} />
        </div>
        <div>
          <FilterInput threshold={threshold} setThreshold={setThreshold} />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-blue-600 mb-1">Total Sales</h3>
              <p className="text-2xl font-bold text-blue-900">{formatCurrency(totalSales)}</p>
            </div>
            <div className="text-blue-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-green-600 mb-1">Average Sales</h3>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(averageSales)}</p>
            </div>
            <div className="text-green-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-purple-600 mb-1">Peak Sales</h3>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(maxSales)}</p>
            </div>
            <div className="text-purple-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {chartType} Chart - {filtered.length} months shown
          </h3>
          <span className="text-sm text-gray-500">
            Year: {selectedYear} | Threshold: {formatCurrency(threshold)}
          </span>
        </div>
        {renderChart()}
      </div>
    </div>
  );
};

export default SalesChart;