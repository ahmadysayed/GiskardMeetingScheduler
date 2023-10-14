import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { deleteAvailability } from '../actions/availabilityAction';
import { listSlots } from '../actions/slotActions';

const AvailabilityDelete = () => {
  const [availabilityId, setAvailabilityId] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const slotList = useSelector((state) => state.slotList);
  const { loading, error, slots } = slotList;

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  useEffect(() => {
    if(!userInfo){
      navigate('/')
    }
    dispatch(listSlots())
}, [dispatch, navigate, userInfo])

  const handleAvailabilityIdChange = (e) => {
    setAvailabilityId(e.target.value);
  };

  const handleDelete = async (e) => {
      e.preventDefault();
      dispatch(deleteAvailability(availabilityId));
      window.alert("Deleted Successfully");
  };

  return (
    <FormContainer>
      <h2 className='mb-4 mt-5'>Delete Availability</h2>
      <Form>
        <Form.Group controlId="availabilityId">
          <Form.Label>Availability ID:</Form.Label>
          <Form.Control
            type="number"
            value={availabilityId}
            onChange={handleAvailabilityIdChange}
            placeholder="Enter Availability ID"
          />
        </Form.Group>
        <Button variant="danger" onClick={handleDelete} className='my-3'>
          Delete Availability
        </Button>
      </Form>

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
        {slots.map((slot) => (
          <tr key={slot.id}>
            <td>{slot.id}</td>
            <td>{slot.start.substring(0, 10)} - {slot.start.substring(11, 16)}</td>
            <td>{slot.end.substring(0, 10)} - {slot.end.substring(11, 16)}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </FormContainer>
  );
};

export default AvailabilityDelete;
