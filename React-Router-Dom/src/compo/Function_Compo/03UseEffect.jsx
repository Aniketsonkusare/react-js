import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [data,setData] = useState({counter:0})

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>res.json)
            .then((Response) =>{
                console.log(Response);
            })
            .catch((Error)=>{
                console.log(Error);
            })
        }, 2000);
    })

    const btnclck = () =>{
        setData({counter:data.counter+1});    
        document.body.style.backgroundColor = "rgba(99, 255, 71, 0.4)"
    }
    const btnclck1 = () =>{
        setData({counter:data.counter-1});    
        document.body.style.backgroundColor = "rgba(255, 99, 71, 0.4)"
    }
    const reset = () =>{
        setData({counter:0});    
        document.body.style.backgroundColor = "white"
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{data.counter}</h1>
                    <button className='btn btn-success mx-1' onClick={btnclck}>Increment</button>
                    <button className='btn btn-danger mx-1' onClick={btnclck1}>Decrement</button>
                    <button className='btn btn-warning mx-1' onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    </>
  )
}
