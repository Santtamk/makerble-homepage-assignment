
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function DashBoard() {
  return (
    <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logged in as: <a href="#login">User001</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DashBoard;