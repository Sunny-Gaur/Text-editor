import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './Navbar';
import About from './About';
import { useState } from 'react';
import Alert from './Alert';
export default function App() {
const[mode,setmode]=useState("default");
const[modess,setmodes]=useState(" enable dark-mode");


const toggleMode =()=>{
if(mode==="default"){
  setmode("inverse");
  setmodes(" disable dark-mode");
  document.body.style.backgroundColor="#042743";

}
else{
setmode("default");
setmodes(" enable dark-mode");
document.body.style.backgroundColor="white";
}
}
// const [alert,setalert]=useState(null);

  return (

   <>
      

   <Navbar mode={mode} toggle={toggleMode} modess={modess}/>
  
   
    </>
  );
}


