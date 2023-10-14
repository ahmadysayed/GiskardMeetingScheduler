import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

function Header() {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Giskard</Navbar.Brand>
          </LinkContainer>

          <Nav className="me-auto">
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            {userInfo && userInfo.isAdmin ? (
              <>
                <LinkContainer to='/availability-create'>
                  <Nav.Link>Add Time</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/availability-delete'>
                  <Nav.Link>Delete Time</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/list-reservation'>
                  <Nav.Link>Meetings</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to='/create-reservation'>
                  <Nav.Link>Reservation</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/reservation-delete'>
                  <Nav.Link>Cancel Meeting</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>

          <Nav className="ml-auto">
            {userInfo ? (
              <NavDropdown title={userInfo.username} id='username'>
                <LinkContainer to='/'>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
