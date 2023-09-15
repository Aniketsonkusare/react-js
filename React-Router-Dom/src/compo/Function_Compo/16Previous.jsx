import React from 'react'
import {
    Link
  } from "react-router-dom";

function Previous() {
  return (
    <>
        <div className="container mt-5">
            <Link to="/navigate" className='btn btn-dark'>Previous</Link>
        </div>
    </>
    )
}

export default Previous
