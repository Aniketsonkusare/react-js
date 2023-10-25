// import { useState } from 'react'
// import './App.css'
import ShowData from './CRUD/ShowData'
import Home from './CRUD/Home'
import Update from './CRUD/Update'
import{
  Routes,
  Route,
} from "react-router-dom"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<ShowData/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
