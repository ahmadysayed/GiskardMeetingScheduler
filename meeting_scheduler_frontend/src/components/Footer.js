import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {

  let style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "90px",
    width: "100%",
};

  return (
    <div>
        <footer style={style}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; Giskard</Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer
    