
import './App.css';
import Navbar from  './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import React , {useState} from 'react';
import Alert from './components/Alert';
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
        }, 3000);
  }
  const toggleMode=()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode enabled", "success");
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");

    }
    
  }
  return (
    <>
      <Navbar title= "TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} ></Alert>
      <div className="container">
        <TextForm showAlert={showAlert} heading= "Enter the text to analyze" mode={mode}></TextForm>  
        <About></About>
      </div>
    </>
    
  );
}

export default App;
