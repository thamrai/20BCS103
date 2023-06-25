import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('/api/train-schedule'); // Replace with your API endpoint
        setTrains(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>
          <p>Departure: {train.departureTime}</p>
          <p>Arrival: {train.arrivalTime}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTrains;
