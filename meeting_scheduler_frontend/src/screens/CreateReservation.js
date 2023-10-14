import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createReservation } from '../actions/reservationAction';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import { redirect, useNavigate } from 'react-router-dom';


const CreateReservation = () => {
  const [reservationData, setReservationData] = useState({
    start: '',
    end: '',
    title: '',
    email: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(reservationData));
    window.alert('Your Meeting Fixed Successfully');
    navigate('/')
  };

  return (
    <FormContainer>
      <h2 className='mb-4 mt-5'>Create Reservation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="start">
          <Form.Label>Start:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="start"
            value={reservationData.start}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="end">
          <Form.Label>End:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="end"
            value={reservationData.end}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={reservationData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={reservationData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='my-3'>
          Create Reservation
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CreateReservation;
