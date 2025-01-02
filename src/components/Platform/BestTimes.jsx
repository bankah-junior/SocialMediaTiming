import React from 'react';

const BestTimes = ({ times }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="mb-4 text-lg font-bold">Optimal Posting Times</h2>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
            Day
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
            Times
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {times.map((time, index) => (
          <tr key={index}>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
              {time.day}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
              {time.times}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BestTimes;
