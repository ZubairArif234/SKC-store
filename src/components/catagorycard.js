
import './index.css';



function Catagorycard({img,name}) {
  return (
    <div className="catagorycardmain"  >
      <div className="catagorycard">
        <center>
     <img src={img}  className="catagoryimg"/>
     </center>
     </div>
     <center>

     <button className='cattext'>{name}</button>
     </center>
     
    </div>
  );
}

export default Catagorycard;
