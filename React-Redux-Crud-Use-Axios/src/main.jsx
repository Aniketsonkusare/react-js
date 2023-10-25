import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Home from './CRUD/Home'
import 'bootstrap5/src/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store'
// import ShowData from './CRUD/ShowData'
import {
  BrowserRouter
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      {/* <Home/> */}
      {/* <ShowData/> */}
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
