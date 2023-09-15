import React, { Component } from 'react'
import Reusable from './04Reusable_Compo'

class Props extends Component {
  render() {
    return (
      <>
        <div className="product">
          
          <Reusable imgSrc="src/compo/hoka.jpg" ProductName="Product Name: Hoka Shoes"
          oldPrice="old Price: 4000" newPrice="New Price: 3000" Btn="buy"/>
          <Reusable imgSrc="src/compo/nike.jpg" ProductName="Product Name: Nike Shoes"
          oldPrice="old Price: 4000" newPrice="New Price: 3500" Btn="buy"/>
          <Reusable imgSrc="src/compo/puma.jpg" ProductName="Product Name: Puma Shoes"
          oldPrice="old Price: 5000" newPrice="New Price: 4000" Btn="buy"/>
        </div>
      </>
    )
  }
}
export default Props;