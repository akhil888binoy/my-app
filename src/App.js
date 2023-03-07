
import './App.css';
import Navbar from  './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import React , {useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode ==='light'){
      setMode('dark')
    }else{
      setMode ('light')
    }
    
  }
  return (
    <>
     <Navbar title= "TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}></Navbar>
     <div className="container">
     <TextForm heading= " Enter the text to analyze"></TextForm> 
      <About></About>
     </div>
     
    </>
    
  );
}

export default App;
