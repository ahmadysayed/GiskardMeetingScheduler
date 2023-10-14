import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { createAvailability } from '../actions/availabilityAction';

const AvailabilityCreate = () => {
  const [availabilityData, setAvailabilityData] = useState({
    start: '',
    end: ''
  });

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  useEffect(() => {
    if(!userInfo){
      navigate('/')
    }
}, [navigate, userInfo])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvailabilityData({ ...availabilityData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAvailability(availabilityData));
  };

  return (
    <FormContainer>
      <h2 className='mb-4 mt-5'>Create Availability</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="start">
          <Form.Label>Start:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="start"
            value={availabilityData.start}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="end">
          <Form.Label>End:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="end"
            value={availabilityData.end}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='my-3'>
          Create Availability
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AvailabilityCreate;
