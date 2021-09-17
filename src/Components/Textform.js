import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () =>{
        //console.log("LowerCase was clicked "+ text);
        let newText = text.toLowerCase();

        setText(newText);
    }
    const handleClrClick = (event) =>{
        setText("");
    }
    
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
   
    const [text, setText] = useState('');
    
    return (
        <>
        <div className = "container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value = {text} onChange = {handleOnChange} style ={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}  className = "form-control" id = "myBox" rows = "8"></textarea>
            </div>
           <button className="bt btn-primary mx-3" onClick = {handleUpClick}>Convert to UpperCase</button>
           <button className="bt btn-primary mx-3" onClick = {handleLoClick}>Convert to LowerCase</button>
           <button className="bt btn-primary mx-3" onClick = {handleClrClick}>Clear the text Box</button>
        </div>
        <div className="container" style ={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characetrs</p>
            <p>{0.008 * text.split(" ").length}minutes to read above text</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter Something to preview here"}</p>
        </div>

        </>
    )
}
