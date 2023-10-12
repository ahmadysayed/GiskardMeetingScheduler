import React, { useState } from 'react';
import axios from 'axios';

const CreateReservation = () => {
  const [formData, setFormData] = useState({
    start: '',
    end: '',
    title: '',
    email: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send reservation data to the backend to create a reservation
    axios.post('http://localhost:8000/api/reservations/', formData)
      .then(response => {
        console.log('Reservation created:', response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Create Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input type="datetime-local" name="start" value={formData.start} onChange={handleChange} />
        </label>
        <br />
        <label>
          End:
          <input type="datetime-local" name="end" value={formData.end} onChange={handleChange} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default CreateReservation;
