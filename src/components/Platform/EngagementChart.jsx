import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EngagementChart = ({ data }) => (
  <div className="h-[400px] transform transition-all duration-500 hover:scale-[1.02]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="time" 
          stroke="#6b7280"
          tick={{ fill: '#6b7280' }}
        />
        <YAxis 
          stroke="#6b7280"
          tick={{ fill: '#6b7280' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="engagement" 
          stroke="#4F46E5" 
          strokeWidth={3}
          dot={{ fill: '#4F46E5', strokeWidth: 2, r: 6 }}
          activeDot={{ r: 8, fill: '#4F46E5' }}
          animationDuration={1500}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default EngagementChart;