
import './index.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import skclogo from '../assets/images/skcStudio.jpeg'
import cart from '../assets/images/cart.png'

function CardBoot({name,price}) {
  const [counter , setcounter] = useState(1)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addcount = () =>{
    if (counter == 10){
      setcounter(10)
    }else{

      let no = counter + 1 
      setcounter(no)
    }
  }
  console.log(counter);
  const minuscount = () =>{
    if (counter == 1){
      setcounter(1)
    }else{
      let no = counter - 1 
      setcounter(no)

    }
  }
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
         <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',border:'2px solid black',padding:'10px'}}>
          <img src={skclogo} style={{width:'60px'}}/>
          <p style={{margin:'10px'}}>aalo</p>
          <div style={{display:'flex',alignItems:'center'}}>
            <button className='counterbtn'onClick={addcount}>+</button>
            <p style={{width:'40px',textAlign:'center',paddingTop:'10px'}}>{counter}</p>
            <button className='counterbtn' onClick={minuscount}>-</button>
          </div>
          <p style={{margin:'10px'}}>1000/-</p>
         </div>
        </Offcanvas.Body>
        {/* <p>Tip: You can only order 10 pieces of each item ! </p> */}
        <button style={{border:'none', backgroundColor:'black',color:'white',padding:'10px',margin:'10px'}}>Order Now</button>
       
      </Offcanvas>
      </Card.Body>
    </Card>
  );
}


function CartHeader (){
    return(
        // <div style={{backgroundColor:'orange',width:'100'}}>
        <div style={{display:'flex',flexWrap:'wrap' ,textAlign:'center'}} >
            <img src={cart} alt='skc-studio' style={{width:'40px'}} />
<center>

            <h2 style={{marginLeft:'15%'}}>CART</h2>
</center>
        </div>
        // </div>
    )
}


export default CardBoot;