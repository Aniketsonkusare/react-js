import React, { useState } from 'react'
import { createContext } from 'react'
import Theme from './22Theme'

export const ThemeContext = createContext()

function MyTheme(props) {
    const[theme,setTheme] = useState(true)
    function toggleTheme() {
        setTheme((ele) => !ele)
    }
  return (
    <div>
        <div className="container mt-5">
            <ThemeContext.Provider value={theme}>
                <button className='btn btn-primary' onClick={toggleTheme}>ToggleTheme</button>
                <br /><br />
                <Theme/>
            </ThemeContext.Provider>
        </div>
    </div>
  )
}

export default MyTheme
