import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableSlots = () => {
  const [availabilities, setAvailabilities] = useState([]);

  useEffect(() => {
    // Fetch available slots from the backend API
    axios.get('http://localhost:8000/api/availabilities/')
      .then(response => {
        setAvailabilities(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {availabilities.map(availability => (
          <li key={availability.id}>
            Start: {availability.start}, End: {availability.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSlots;
