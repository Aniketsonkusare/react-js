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
        <Button className='btn btn-dark mx-2' onClick={handlePlayClick}>play "{moviename}"</Button> 
    )
}

function UploadButton() {
    return(
        <Button className='btn btn-dark mx-2' onClick={()=>alert('Uploading')}>Upload Image</Button>
    )
}

