import React , {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Upper case was clicked");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success")
  }
  const handleLowClick =()=>{
    console.log("Upper case was clicked");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success")
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
        
            <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading} </h1>

                <div className="form-group">
                    <textarea type="email" className="form-control" id="mybox"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'light', color : props.mode === 'dark' ? 'white' : 'black'}} rows = "8"/>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(" ").length} words {text.length} characters</p>
            <p> {0.008 * text.split(" ").length } Minutes read</p>
            <h2> Preview </h2>
            <p>{text.length>0?text:"Enter something in textbox"}</p>
        </div>
    
    </>
        
  )
}
