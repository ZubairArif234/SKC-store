
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import skclogo from '../assets/images/skcStudio.jpeg'

function CardBoot({name,price}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={skclogo} style={{width:'80%'}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {price}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{width:'100%'}} onClick={handleShow}>Add to Cart</Button>


        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><CartHeader /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </Card.Body>
    </Card>
  );
}


function CartHeader (){
    return(
        // <div style={{backgroundColor:'orange',width:'100'}}>
        <div style={{display:'flex',flexWrap:'wrap' ,textAlign:'center'}} >
            {/* <img src={skclogo} alt='skc-studio' style={{width:'30%'}} /> */}
<center>

            <h2 style={{marginLeft:'10%'}}>CART</h2>
</center>
        </div>
        // </div>
    )
}


export default CardBoot;