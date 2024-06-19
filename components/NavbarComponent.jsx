import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/user">
            User
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavbarComponent