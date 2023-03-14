
import '../App.css';
import '../components/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertags from '../components/headertag';
import CollapsibleExample from '../components/navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Catagorycard from '../components/catagorycard';
import CardBoot from '../components/card';



function Main() {
  return (
    <div className="App">
      <Headertags/>
      <CollapsibleExample/>
      
      {/* catagories component start */}
      <div style={{marginTop:'20px'}}>
        <h2 style={{textAlign:'center'}}>SMART WATCH</h2>
        <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-evenly', marginTop:'20px'}}>

<CardBoot name='headphone' price='10,000'/>
<CardBoot/>
<CardBoot/>
<CardBoot/>
        {/* <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'Add To Cart'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'Add To Cart'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'Add To Cart'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'Add To Cart'}/> */}
        </div>
      </div>
      {/* catagories component end */}
      {/* <HomeAboutus/> */}
      {/* <ContactManager/> */}
      {/* <ContactDeveloper/> */}
      <div style={{backgroundColor:'black',marginTop:'70px'}}>
        <p style={{textAlign:'center', padding:"10px" , color:'white'}}>© 2023 HMN Studio Website Designed & Developed by <a href='https://www.instagram.com/zubairarif234/'>Zubair ARif</a></p>
      </div>
     
    </div>
  );
}

export default Main;
