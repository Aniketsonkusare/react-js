import React from 'react'
import { useState } from 'react'

export default function Intro() {
    const [name,setName] = useState("")
    const[age,setAge] = useState("")

    const btnclck = ()=>{
        console.log("btn clicked");
        setName("Aniket")
        setAge("21")
    }
  return (
   <>
    <div className="container">
        <h1>Welcome to function component</h1>
        <br />
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <br />
        <button className='btn btn-primary' onClick={btnclck}>click me</button>
    </div>
   </>
  )
}
