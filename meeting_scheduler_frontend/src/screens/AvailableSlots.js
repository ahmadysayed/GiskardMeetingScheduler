import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSlots } from '../actions/slotActions';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AvailableSlots.css'; // Import custom styles

const groupSlotsByDate = (slots) => {
  const groupedSlots = {};

  slots.forEach((slot) => {
    const date = slot.start.substring(0, 10);
    if (!groupedSlots[date]) {
      groupedSlots[date] = [];
    }
    groupedSlots[date].push(slot);
  });

  return groupedSlots;
};

const AvailableSlots = () => {
  const dispatch = useDispatch();
  const slotList = useSelector((state) => state.slotList);
  const { loading, error, slots } = slotList;

  React.useEffect(() => {
    dispatch(listSlots());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  const groupedSlots = groupSlotsByDate(slots);

  return (
    <Container className="available-slots-container">
      <h2 className="mt-4 mb-3">Available Slots</h2>
      {Object.keys(groupedSlots).map((date) => (
        <div key={date} className="date-group mb-4">
          <h4 className="date-heading">{date}</h4>
          <Row>
            {groupedSlots[date].map((slot) => (
              <Col key={slot.id} lg={2} md={4} className="mb-3">
                <Card className="slot-card">
                  <Card.Body>
                    <ul className="list-unstyled text-center mt-2">
                      <li>
                        <strong>Start:</strong> {slot.start.substring(11, 16)}
                      </li>
                      <li>
                        <strong>End:</strong> {slot.end.substring(11, 16)}
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AvailableSlots;
