import React from 'react'

function Eve() {
    return (
        <>
            <PlayButton moviename="KGF 2"/>
            <UploadButton/>
        </>
  )
}

export default Eve

function Button({onClick,children}) {
    return(
        <button className='btn btn-dark mx-2' onClick={onClick}>{children}</button>
    )
}

function PlayButton({moviename}) {
    function handlePlayClick() {
        alert(`playing ${moviename}!`);
    }
    return(
        <Button onClick={handlePlayClick}>play "{moviename}"</Button>
    )
}

function UploadButton() {
    return(
        <Button onClick={()=>alert('Uploading')}>Upload Image</Button>
    )
}

