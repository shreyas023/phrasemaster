import React, { useState } from 'react';

function Textform(props) {
    const [text,setText] = useState('');

    const handleupClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }

    const handleloClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
    }

    const handleclearClick = ()=>{
      let newText = "";
      setText(newText);      
      props.showAlert("Text cleared","warning");
    }

    const handleOnChange= (event) =>{
      setText(event.target.value);
    }

    const handleCopy = ()=>{
      let newText = document.getElementById("myBox");
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Text copied","success");
    }

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces","success");
    }

    

  return (
    <>
    <div className=''>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleclearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra spaces</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#031322'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

export default Textform;
