import logo from './logo.svg';
import './App.css';
import './components/index.css';
import LogApp from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertags from './components/headertag';
import CollapsibleExample from './components/navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slidercomp from './components/slider';
import Catagorycard from './components/catagorycard';
import HomeAboutus from './components/homeaboutus';
import ContactManager from './components/contactmanager';
import ContactDeveloper from './components/contactdeveloper';


function Main() {
  return (
    <div className="App">
      <Headertags/>
      <CollapsibleExample/>
      <Slidercomp style={{with:'85%'}}/>
      {/* catagories component start */}
      <div style={{marginTop:'20px'}}>
        <h2 style={{textAlign:'center'}}>SHOP BY CATEGORY</h2>
        <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-evenly'}}>

        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'headphone'}/>
        </div>
      </div>
      {/* catagories component end */}
      <HomeAboutus/>
      <ContactManager/>
      <ContactDeveloper/>
      <div style={{backgroundColor:'black'}}>
        <p style={{textAlign:'center', padding:"10px" , color:'white'}}>© 2023 HMN Studio Website Designed & Developed by <a href='https://www.instagram.com/zubairarif234/'>Zubair ARif</a></p>
      </div>
     
    </div>
  );
}

export default Main;
