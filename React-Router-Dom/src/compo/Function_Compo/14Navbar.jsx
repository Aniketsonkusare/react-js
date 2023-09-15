import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  import UseState from './02UseState'
  import UseEffect from './03UseEffect'
  import Events from './04Event'
  import Intro from './01intro'
  import Condition from './05Condition'
  import Eve from './06Eve'
  import Ternary from './07Ternary'
  import List from './08List'
  import UseRef from './09UseRef'
  import Form from './10Forms'
  import ReactStrap from './11ReactStrap'
  import Formvalidation from './12FormValidation'
  import Session from './13SessionStorage'
  import Navigate from './15Navigate';

function Navbar() {
  const menus = {'/usestate' : 'UseState' , '/useeffect' : 'UseEffect' , '/events' : 'Events', 
  '/intro' :'Intro' ,'/condition' : 'Condition', './eve' : 'Eve', './navigate' : 'Navigate'}
  const AllData = Object.entries(menus).map((res,i) => {
    console.log(res);
    return <li key={i}>
      <Link className="dropdown-item" to={res[0]}>{res[1]}</Link>
      </li>
  })
  return (
    <>
    <Router>
       
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>  
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Function Compo</a>
          <ul className="dropdown-menu">
            {AllData}
            {/* <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
        <Route path='/usestate' element={<UseState/>}/>
        <Route path='/useeffect' element={<UseEffect/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/intro' element={<Intro/>}/>
        <Route path='/condition' element={<Condition/>}/>
        <Route path='/eve' element={<Eve/>}/>
        <Route path='/ternary' element={<Ternary/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/useref' element={<UseRef/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/reactstrap' element={<ReactStrap/>}/>
        <Route path='/formvalidation' element={<Formvalidation/>}/>
        <Route path='/session' element={<Session/>}/>
        <Route path='/navigate' element={<Navigate/>}/>        
    </Routes>
  </Router>
    </>
    )
}

export default Navbar
