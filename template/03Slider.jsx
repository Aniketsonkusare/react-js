import React, { Component } from 'react'

export default class Slider extends Component {
  render() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="src/compo/hoka.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src/compo/nike.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src/compo/puma.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
  }
}
