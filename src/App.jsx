import logo from './logo.svg';
import './App.css';
import LogApp from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertags from './components/headertag';
import CollapsibleExample from './components/navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slidercomp from './components/slider';
import Catagorycard from './components/catagorycard';


function App() {
  return (
    <div className="App">
      <Headertags/>
      <CollapsibleExample/>
      <Slidercomp style={{with:'85%'}}/>
      <div style={{marginTop:'20px'}}>
        <h2 style={{textAlign:'center'}}>SHOP BY CATEGORY</h2>
        <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'space-evenly'}}>

        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123724_360x.png?v=1674812815'} name={'headphone'}/>
        <Catagorycard img={'https://cdn.shopify.com/s/files/1/0710/1651/3813/collections/Screenshot_2023-01-25_123659_360x.png?v=1674812788'} name={'headphone'}/>
        
        </div>
      </div>
     
    </div>
  );
}

export default App;
