

import { BrowserRouter,Route,Routes,Link,Navigate } from "react-router-dom";
import Main from "../padges/main";
import { Button, Result } from 'antd';
import Smartwatch from "../padges/smartwatch";




function Routing  (){
    const arr = ['smartwatch','/ringlight']
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/smartwatch" element={<Smartwatch/>}/>
            <Route path="/ringlight" element={<Smartwatch/>}/>
            {/* {arr.map((a)=>{
                <Route path={'/'+a} element={<Smartwatch/>}/>
            })} */}
            <Route path="*" element={
                  <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  extra={
                    <Link to={'/'}>
                  <Button type="primary" >Back Home</Button>
                    </Link>}
                />
            }/>
        </Routes>
        </BrowserRouter>
    );
}
export default Routing