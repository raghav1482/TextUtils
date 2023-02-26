import React, {useState} from 'react';


export default function Textarea(props) {
    const [text,setText]=useState('');
    
    function upper(){
        setText(text.toUpperCase());
        props.showalert("Converted to Uppercase","success");
    }
    function lower(){
        setText(text.toLowerCase());
        props.showalert("Converted to Lowercase","success");
    }
    function removespc(){
        let newtext="";
        for (let i=0 ; i<text.length ; i++){
            if(text[i]===' '){
                continue;
            }
            else{
                newtext=newtext+text[i];
            }
        }
        setText(newtext);
        props.showalert("Spaces removed","success");
    }
    function check(){
        if(text.split("").length!==0){
            if(text.charAt(text.length-1)===" "){
            return <p> {text.split(" ").length-1} words and {text.split("").length} characters</p>
        }
        else{
            return <p> {text.split(" ").length} words and {text.split("").length} characters</p>
        }
        }
        else{
            return <p> 0 words and {text.split("").length} characters</p>
        }
    }
    const hangleonchange=(event)=>{
        setText(event.target.value);
    }
    
    function tobinary() {
        var input = text;
        let output= "";
        for (var i = 0; i < input.length; i++) {
            output += input[i].charCodeAt(0).toString(2) + " ";
        }
        setText(output);
        props.showalert("Text converted to binary","success");
        
    }
    function clearit() {
        setText("");
        props.showalert("Text cleared","success");
    }
    function copytext() {
        navigator.clipboard.writeText(text);
        props.showalert("Text copied","success");
    }
    return (
    <>
<div className='container mb-4 mt-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <label htmlFor="myBox" className="form-label">Enter Text</label>
    <textarea className="form-control mt-2" value={text} onChange={hangleonchange} placeholder="Enter your text" id="exampleFormControlTextarea1 " rows="3"></textarea>
</div>
<div align="center">
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={upper}>Uppercase</button>
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={lower}>Lowercase</button>
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={removespc}>Remove Spaces</button>
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={tobinary}>Change(Binary)</button>
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={clearit}>Clear</button>
    <button type="button" className="btn btn-primary me-4 mt-3" onClick={copytext}>Copy</button>
</div>
<div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>
    <h4>Your Text Summary</h4>
    {check()}
    <h5>Preview</h5><div style={{wordWrap:"break-word"}}><p>{text}</p>
</div>
</div>
</>
  );
}
