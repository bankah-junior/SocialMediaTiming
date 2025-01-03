import { useState } from 'react';
import Hero from './components/Hero/Hero';
import PlatformSection from './components/Platform/PlatformSection';
import Footer from './components/Footer/Footer';
import { platformsData } from './data/platformData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Filter logic
  const filteredPlatforms = Object.entries(platformsData).filter(([key, platform]) => {
    // Match search term in platform name or tips
    const matchesSearch =
      platform.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platform.tips.some((tip) =>
        tip.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Match selected day
    const matchesDay =
      !selectedDay ||
      platform.data.peakDays.some((day) =>
        day.toLowerCase().includes(selectedDay.toLowerCase())
      );

    // Match selected time
    const matchesTime =
      !selectedTime ||
      platform.data.bestTimes.some((time) =>
        time.times.toLowerCase().includes(selectedTime.toLowerCase())
      );

    return matchesSearch && matchesDay && matchesTime;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />

      {/* Filters Section */}
      <div className="px-4 py-6 bg-gray-100">
        <div className="flex flex-col max-w-4xl gap-4 mx-auto md:flex-row">
          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search platform or tips..."
            className="flex-grow p-2 border border-gray-300 rounded-lg"
          />

          {/* Day Dropdown */}
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Days</option>
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          {/* Time Dropdown */}
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Times</option>
            {[
              '6 AM – 9 AM',
              '9 AM – 12 PM',
              '12 PM – 3 PM',
              '3 PM – 6 PM',
              '6 PM – 9 PM',
              '9 PM – 12 AM',
            ].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Platform Sections */}
      <div className="flex-grow divide-y divide-gray-200">
        {filteredPlatforms.length > 0 ? (
          filteredPlatforms.map(([key, platform]) => (
            <PlatformSection
              key={key}
              platform={platform.platform}
              icon={platform.icon}
              color={platform.color}
              data={platform.data}
              tips={platform.tips}
            />
          ))
        ) : (
          <p className="py-6 text-center">No platforms match the selected criteria.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
