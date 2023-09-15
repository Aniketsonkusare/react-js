import React, { useRef, useState } from 'react'
import Previous from './16Previous';

function Forms() {
    const inpref = useRef('')
    const[data,setdata] = useState('')
    const BtnClck = () =>{
        console.log("submitted");
        console.log(inpref.current.value);
        if (inpref.current.value == "") {
            alert("please enter the value 1")
            inpref.current.focus();
        }
    }

    // const handlechange = ()=>{
    //     if (data == "") {
    //         alert("please enter the value")
            
    //     }
    // }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={BtnClck} action='#'>
                    <label>Name:</label>
                    <input type="text" name='name' id='' className='form-control' ref={inpref}/>
                    {/* <input type="text" name='name' className='form-control' value={data} onChange={(e) => {e.target.value(setdata)}} /> */}
                    <button type='submit' className='btn btn-primary mt-2' name='submit'>submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Previous/>
    </>
    )
}

export default Forms
