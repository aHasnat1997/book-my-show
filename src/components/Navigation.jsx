import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='primary' variant="warning">
      <Container>
        <Navbar.Brand>
          <Link to='/' className='text-light navbar-brand fw-bold fs-3'>
            Book<span className='text-warning'>My</span>Show
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='fs-5'>
          <Nav className="ms-auto">
            <Link to='/' className='text-light nav-link'>Home</Link>
            <Link to='/my-booking' className='text-light nav-link'>My Booking</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
