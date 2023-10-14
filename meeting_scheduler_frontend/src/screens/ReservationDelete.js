import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { deleteReservation } from '../actions/reservationAction';

const ReservationDelete = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDelete = async (e) => {
     e.preventDefault();
     dispatch(deleteReservation(email));
     window.alert("Your Meeting Canceled");
  };

  return (
    <FormContainer>
      <h2 className='mb-4 mt-5'>Cancel Meeting</h2>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Button variant="danger" onClick={handleDelete} className='my-3'>
          Delete Reservation
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ReservationDelete;
