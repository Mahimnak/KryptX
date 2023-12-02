import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import '../assets/css/Charts.css';

const Chart = ({ coinId, selectedCurrency }) => {
  const [chartData, setChartData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${selectedCurrency}&days=7`;

  const handleChartAPI = async () => {
    try {
      const response = await axios.get(url);
      const finalData = response.data.prices.map((dataPoint) => ({
        date: new Date(dataPoint[0]),
        price: dataPoint[1],
      }));
      setChartData(finalData);
    } catch (error) {
      console.error('Error fetching chart data: ', error);
    }
  };

  useEffect(() => {
    handleChartAPI();
  }, [selectedCurrency, coinId]);

  return (
    <div>
      <h2>Area Chart for {coinId}</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                <stop offset="95%" stopColor="purple" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="blue" fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default Chart;
