import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header'
import Slider from './Slider'
import Section from './Section'
import Arrival from './Arrival'
import Product from './Product'
import Client from './Client'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Slider/>
    <Section/>
    <Arrival/>
    <Product/>
    <Client/>
    <Footer/>
  </React.StrictMode>,
)
