import React, { Component } from 'react'
import Reusable from './04Reusable_Compo'

class Props extends Component {
  render() {
    return (
      <>
        <div className="product">

          <Reusable imgSrc='src/compo/hoka.jpg' product='Product Name: Hoka Shoes' oldPrice='4000' newPrice='3000' btn='buy'/>
          <Reusable imgSrc='src/compo/nike.jpg' product='Product Name: Nike Shoes' oldPrice='5000' newPrice='4000' btn='buy'/>
          <Reusable imgSrc='src/compo/puma.jpg' product='Product Name: Puma Shoes' oldPrice='6000' newPrice='5000' btn='buy'/>
        </div>
      </>
    )
  }
}

export default Props;