import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('')
    const uppercase=()=>{
        console.log("uppercase btn clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const lowercase=()=>{
        console.log("lowercase btn click");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const cleartext=()=>{
        console.log("clear text");
        let newtext = ''
        setText(newtext)
    }

    const trimtext=()=>{
        console.log("clear text");
        let newtext = text.trim();
        setText(newtext)
    }
    

    const changetext=(event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    return (
    <>
    <div className="mb-3">
        <h1>{props.title}</h1>
    </div>
    <div className="mb-3">
        <textarea className="form-control border border-dark" onChange={changetext} value={text} id="exampleFormControlTextarea1" rows="8" ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={uppercase}>convert to uppercase</button>
    <button className='btn btn-danger mx-2' onClick={lowercase}>convert to lowercase</button>
    <button className='btn btn-warning mx-2' onClick={cleartext}>Clear Text</button>
    <button className='btn btn-dark mx-2' onClick={trimtext}>trim text</button>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.split('').length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minitues read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}

