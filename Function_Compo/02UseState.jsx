import React, { useState } from 'react'

export default function UseState() {
    const[name,setName] = useState("");
    const[age,setAge] = useState("");

    const btnclck = () =>{
        setName("red & white")
        setAge("3 months")
    }
  return (
    <>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1>{name}</h1>
                    <h3>{age}</h3>
                    <button className='btn btn-success' onClick={btnclck}>Tell me your name and age</button>
                </div>
            </div>
        </div>
    </>
  )
}
