import React, { Component } from 'react'

export default class BT3Carousel extends Component {
    render() {
        return (
<div>
  <div id="carouselExampleIndicators" className="carousel slide w-100, height:200px" data-bs-ride="carousel" >
    <ol className="carousel-indicators">
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" />
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} />
      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </a>
  </div>
</div>


        )
    }
}