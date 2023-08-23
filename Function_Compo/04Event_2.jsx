import React from 'react'

function Event() {
  return (
    <>
        <Demo message="i am a alert">click</Demo>
        <Name message="you are clicked the alert button">click</Name>
    </>
    )
}

export default Event

function Demo({message,children}) {
    return(
        <>
            <button className='btn btn-primary mx-2' onClick={()=>alert(message)}>{children}</button>
        </>
    )
}

function Name({message,children}) {
    return(
        <>
            <button className='btn btn-success mx-2' onClick={()=>alert(message)}>{children}</button>
        </>
    )
}