import React, { Component } from 'react'

class Intro extends Component {
   constructor(){
    console.log("hello");
    super();
   } 
  render() {
    return (
        <>
        <h1>Welcome to class Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea vitae error aspernatur perspiciatis voluptate odit cumque, eius ullam voluptatum autem temporibus amet rem harum aliquid laudantium minima quisquam sint.</p>
        </>
    )
  }
}

export default Intro;
