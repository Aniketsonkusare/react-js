import React from 'react'
import Previous from './16Previous'

function Condition() {
  return (
    <>
        <Item name="Apple" ispacked={true}/>
        <Item name="Orange" ispacked={true}/>
        <Item name="Mango" ispacked={true}/>
        <Item name="Banana" ispacked={false}/>
        <Previous/>
    </>
  )
}

export default Condition


function Item({name,ispacked}) {
    if (ispacked == true) {
        return <li>{name}</li>
    }
    return <li><del>{name}</del></li>
}