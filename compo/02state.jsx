import React, { Component } from 'react'

class State extends Component {
    constructor(){
        super();
        this.state = {
            moviename:"3 idiots",
            author:"chetan bhagt"
        }
    }
    btnclk=()=>{
        this.setState(
            {
                moviename:"2 state",
                author:"chetan patel"
            }
        )
    }
  render() {
    return (
        <div>
            <h1>This is State</h1>
            <h2>Movie Name: {this.state.moviename}</h2>
            <h2>Author Name: {this.state.author}</h2>
            <button onClick={this.btnclk}>click me and change the movie Name</button>
        </div>
    )
  }
}

export default State