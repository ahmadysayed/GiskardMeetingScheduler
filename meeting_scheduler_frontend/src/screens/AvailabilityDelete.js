import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { deleteAvailability } from '../actions/availabilityAction';

const AvailabilityDelete = () => {
  const [availabilityId, setAvailabilityId] = useState('');
  const dispatch = useDispatch();

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button variant='danger' className='btn-sm'>
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </FormContainer>
  );
};

export default AvailabilityDelete;
