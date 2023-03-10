
import './index.css';
import { Navigate , Link, useNavigate} from 'react-router-dom';


function Catagorycard({img,name}) {
  const navigattion = useNavigate()
  const test =() =>{
   
    navigattion(`/${name}`)
    
  }
  return (
    <div className="catagorycardmain"  >
      <div className="catagorycard">
        <center>
     <img src={img}  className="catagoryimg"/>
     </center>
     </div>
     <center>

     <button className='cattext' onClick={()=>test()}>{name}</button>
     
     </center>
     
    </div>
  );
}

export default Catagorycard;
