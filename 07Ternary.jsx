import React, { useState } from 'react'

function Ternary(Props) {
    const[loggedin,setLoggedin] = useState(false);

    const login = () => {
        alert("login");
        setLoggedin(true)
        document.body.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
    }
    const logout = () =>{
        alert("logout");
        setLoggedin(false)
        document.body.style.backgroundColor = "rgba(0, 255, 0, 0.1)"
    }
  return (
    <>
        {loggedin ? (
            <div className="container">
                <h1 className='text-danger'>if you click you will logout</h1>
                <button className='btn btn-danger' onClick={logout}>logout</button>
            </div>
        ):(
            <div className="container">
                <h1 className='text-success'>if you click you will login</h1>
                <button className='btn btn-success' onClick={login}>login</button>
            </div>
        )
    }
    </>
  )
}

export default Ternary
