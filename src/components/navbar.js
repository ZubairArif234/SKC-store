import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Logincomp from './login';
import LogApp from './login';
import SignApp from './signup';



function CollapsibleExample() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [logsign , setlogsign] = useState(false);
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
          <Nav>
            <Nav.Link href="#deets" style={{backgroundColor:'black' , width:'120px',textAlign:'center', marginLeft:'10px', marginTop:"5px",borderRadius:'7px',color:'white'}} onClick={ ()=>{ handleShow() ;setlogsign(false)}}>login</Nav.Link>
            <Nav.Link  href="#memes" style={{backgroundColor:'black' , width:'120px', marginLeft:'10px',textAlign:'center',marginTop:"5px",borderRadius:'7px',color:'white'}} onClick={ ()=>{ handleShow() ;setlogsign(true)}}>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{logsign ? 'Sign up' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {logsign?
          <SignApp/>
        :
        <LogApp/>}
          <center >

     {logsign? 
     <p>Already have an account <p style={{fontWeight:'bold',cursor:'pointer'}} onClick={()=>setlogsign(false)}>LOGIN</p></p> 
     : 
     <p>Don't have an account <p style={{fontWeight:'bold', cursor:'pointer'}} onClick={()=>setlogsign(true)}>SIGN UP</p></p> }
    </center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default CollapsibleExample;




// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
