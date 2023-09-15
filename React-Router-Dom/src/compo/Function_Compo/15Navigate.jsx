import React from 'react'

import {
    Link,
} from "react-router-dom";

function Navigate() {
  return (
    <>
        <div className="container mt-5">
            <Link to="/form" className='btn btn-primary '>Form</Link>                 
            <br /><br />
            <Link to="/useref" className='btn btn-warning'>Useref</Link>                 
            <br /><br />
            <Link to="/ternary" className='btn btn-dark'>Ternary</Link>                 
            <br /><br />
            <Link to="/list" className='btn btn-info'>List</Link>                 
            <br /><br />
            <Link to="/condition" className='btn btn-secondary'>Condition</Link>                 
            <br /><br />
        </div>
    </>
    )
}

export default Navigate
