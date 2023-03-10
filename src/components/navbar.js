import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><h2>SKC Discounted Store</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>HOME</Nav.Link>
            <Nav.Link as={HashLink} smooth to={'./#aboutuss'}>ABOUT US </Nav.Link>
            <Nav.Link as={HashLink} smooth to={'./#contactuss'}>CONTACT US </Nav.Link>
            {/* <Nav.Link href="#powerbank">POWER BANKS </Nav.Link> */}
            <NavDropdown title="Catagories" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/smartwatch'}>SMART WATCH</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/ringlight'}>
              RING LIGHT 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/ringlight'}>POWER BANKS</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;