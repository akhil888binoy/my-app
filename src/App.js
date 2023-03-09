
import './App.css';
import Navbar from  './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(()=>{
            setAlert(null);
        }, 1500);
  }
  const toggleMode=()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode enabled", "success");
      document.title ='TextUtils - Dark Mode' ;
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
      document.title ='TextUtils - Light Mode';


    }
    
  }
  return (
    <>
    <Router>
      <Navbar title= "TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} ></Alert>
      <div className="container my-3">
        
        <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
      </Router>
    </>
    
  );
}

export default App;
