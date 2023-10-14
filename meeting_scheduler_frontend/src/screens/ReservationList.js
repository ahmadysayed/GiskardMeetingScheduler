import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listReservation } from '../actions/reservationAction';
import { Table, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ReservationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, reservations } = useSelector((state) => state.listReservation);

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(!userInfo){
      navigate('/')
    }else{
    dispatch(listReservation());
  }
  }, [dispatch, navigate]);

  return (
    <div className='m-4'>
      <Row className='align-items-center'>
        <Col>
          <h1 className='mb-4 mt-5'>Reservations</h1>
        </Col>
      </Row>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start</th>
              <th>End</th>
              <th>Title</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.start.substring(0, 10)} - {reservation.start.substring(11, 16)}</td>
                <td>{reservation.end.substring(0, 10)} - {reservation.end.substring(11, 16)}</td>
                <td>{reservation.title}</td>
                <td>{reservation.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ReservationList;
