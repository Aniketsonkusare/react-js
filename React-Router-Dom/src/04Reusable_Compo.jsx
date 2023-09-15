import React, { Component } from 'react'

class Reusable extends Component {
  render() {
    return (
      <div>
        <div className="main">
            <img src={this.props.imgSrc} alt="" />
            <h3>{this.props.ProductName}</h3>
            <h3><del>{this.props.oldPrice}</del></h3>
            <h3>{this.props.newPrice}</h3>
            <button>{this.props.Btn}</button>
          <br /><br /><br />
          </div>
      </div>
    )
  }
}

export default Reusable;