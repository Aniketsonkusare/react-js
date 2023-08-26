import React, { useRef } from 'react'

function UseRef() {
    let ref = useRef(0)
    let inputref = useRef("")
    // console.log(ref.current);

    const Btnclck = () => {
        ref.current = ref.current+1;
        alert("you have clicked " + ref.current+" times!");
        inputref.current.focus();
        if (inputref.current.value == "") {
            console.log("please enter value!");
        }
    }
    const reset = () => {
        inputref.current.value = ""
    }
  return (
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <button className='btn btn-primary mx-2' onClick={Btnclck}>Click</button>
                    <button className='btn btn-danger mx-2' onClick={reset}>reset</button>
                    <input type="text" ref={inputref} />
                </div>
            </div>
        </div>
    </>
  )
}

export default UseRef
