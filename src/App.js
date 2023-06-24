import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [Mode,setMode] = useState('dark');
  const [Modename, setModename] = useState('Light mode')
  const [alert,setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null);
     }, 1500);
   }

   

  const handleMode = () =>{ 
    if(mode === 'dark')
    {
      setmode('light');
      setMode('dark');
      setModename('Light Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById("myBox").style.backgroundColor = "white";
      document.getElementById("myBox").style.color = "black";
      document.getElementById("bar-search").style.backgroundColor = "white";
      document.getElementById("bar-search").style.color = "black";
      showAlert("Light Mode enabled","success");
      document.title = "TextUtils - Home";
      document.getElementById("accordionExample").style.backgroundColor = "white";
      document.getElementById("accordionExample").style.color = "black";
    }
    else{
      setmode('dark');
      setMode('light');
      setModename('Dark Mode');
      document.body.style.backgroundColor = '#031322';
      document.body.style.color = 'white';
      document.getElementById("myBox").style.backgroundColor = "#464646";
      document.getElementById("myBox").style.color = "white";
      document.getElementById("bar-search").style.backgroundColor = "#464646";
      document.getElementById("bar-search").style.color = "white";
      showAlert("Dark Mode enabled","success");
      document.title = "TextUtils - Dark";
      document.getElementById("accordionExample").style.backgroundColor = "#464646";
      document.getElementById("accordionExample").style.color = "white";
    } 
  }

  return (
      <div>
      <Navbar title="TextUtils" mode={mode} setmode={handleMode} text={Modename} setMode={setMode} Mode={Mode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below"/>} />
      </Routes>
      {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below"/> */}
      </div>
      </div>
  );
}

export default App; 
