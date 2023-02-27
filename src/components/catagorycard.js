
import '../App.css';



function Catagorycard({img,name}) {
  return (
    <div className="Catagorycard"  style={{backgroundColor:'red' , width:'250px', height:'300px' , margin:'20px'}}>
      
     <img src={img} style={{width:'250px', height:'250px'}}/>
     <h3 style={{textAlign:'center'}}>{name}</h3>
     
    </div>
  );
}

export default Catagorycard;
