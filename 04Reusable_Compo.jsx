import React, { Component } from 'react'

class Reusable extends Component {
  render() {
    return (
      <>
         <div className="main">
            <img src={this.props.imgSrc} alt="" />
            <h3>{this.props.product}</h3>
            <h3><del>old Price:{this.props.oldPrice} </del></h3>
            <h3>new price:{this.props.newPrice}</h3>
            <button>{this.props.btn}</button>
          </div>
      </>
    )
  }
}

export default Reusable;