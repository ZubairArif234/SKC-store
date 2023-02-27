
import Slider from "react-slick";

import '../App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slidercomp  () {
 
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      // cssEase: "linear"

    };
    return (
      // <div style={{backgroundColor:'red' ,margin:'20px'}}>
       

      //   <Slider {...settings}>
      //     <div>
            
      //       <img style={{width:'98%', height:'800px'}} src={"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFyJTIwcG9kc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"}/>
      //     </div>
      //     <div>
      //       <img style={{width:'98%' , height:'800px'}} src={'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'} />
      //     </div>
         
      //   </Slider>
      // </div>
      <div style={{ margin:'25px'}}>
        
        <Slider {...settings}>
          <div  style={{width:'100%', height:'800px', backgroundColor:'red'}}>
            
            <img className="sliderimg" src={"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFyJTIwcG9kc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"}/>
          </div>
          <div className="sliderimg">
           
            <img className="sliderimg" src={"https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}/>
          </div>
          <div>
            
            <img className="sliderimg" src={"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFyJTIwcG9kc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"}/>
          </div>
          
        </Slider>
      </div>
    );
  }
  export default Slidercomp
