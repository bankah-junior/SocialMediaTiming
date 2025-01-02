import React from 'react'

const BestDays = ({days}) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-lg'>
      <h2 className='mb-4 text-lg font-bold'>Best Days To Post</h2>
      <ul className="grid grid-cols-2 gap-4">
        {days.map((day, index) => (
          <li key={index} className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm font-semibold">{day}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BestDays
