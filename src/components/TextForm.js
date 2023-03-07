import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Upper case was clicked");
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLowClick =()=>{
    console.log("Upper case was clicked");
    let newText= text.toLowerCase();
    setText(newText);
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange =(event)=>{
    console.log("Onchanged");
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  
  return (
    <> 
        
            <div className="container">
                <h1>{props.heading} </h1>

                <div className="form-group">
                    <textarea type="email" className="form-control" id="mybox"  value={text} onChange={handleOnChange} rows = "8"/>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words {text.length} characters</p>
            <p> {0.008 * text.split(" ").length } Minutes read</p>
            <h2> Preview </h2>
            <p>{text}</p>
        </div>
    
    </>
        
  )
}
