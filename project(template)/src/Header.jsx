import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="index.html"><img width="250" src="images/logo.png" alt="#" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                           <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                       <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label"></span>Pages <span className="caret"></span></a>
                           <ul className="dropdown-menu">
                              <li><a href="about.html">About</a></li>
                              <li><a href="testimonial.html">Testimonial</a></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="product.html">Products</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="blog_list.html">Blog</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                           </a>
                        </li>
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
      </>
    )
  }
}
