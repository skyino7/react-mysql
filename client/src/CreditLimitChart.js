import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import './CreditLimitChart.css';

const CreditLimitChart = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the existing chart
      }

      const chartData = {
        labels: data.map(customer => customer.customerNumber),
        datasets: [
          {
            label: 'Credit Limit',
            data: data.map(customer => customer.creditLimit),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };

      const ctx = document.getElementById('creditLimitChart');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: chartData
      });
    }
  }, [data]);

  return <canvas id="creditLimitChart" />;
};

export default CreditLimitChart;
