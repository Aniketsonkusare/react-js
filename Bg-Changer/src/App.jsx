import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{backgroundColor: color}}>
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center bg-white px-4 py-3 rounded-3xl gap-4'>
            <button className='text-white px-4 py-1 rounded-3xl' style={{backgroundColor: "red"}}
            onClick={() => {setColor("red")}}>Red</button>
            <button className='text-black px-4 py-1 rounded-3xl' style={{backgroundColor: "yellow"}}
            onClick={() => {setColor("yellow")}}>Yellow</button>
            <button className='text-white px-4 py-1 rounded-3xl' style={{backgroundColor: "blue"}}
            onClick={() => {setColor("blue")}}>Blue</button>
            <button className='text-black px-4 py-1 rounded-3xl' style={{backgroundColor: "aqua"}}
            onClick={() => {setColor("aqua")}}>Aqua</button>
            <button className='text-white px-4 py-1 rounded-3xl' style={{backgroundColor: "gray"}}
            onClick={() => {setColor("gray")}}>Gray</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
