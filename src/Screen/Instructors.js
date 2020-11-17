import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Footer from './Footer'

export default function Instructors() {
    return (
      <div>
        <div className='container'>
            <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active nazar"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active nazar"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Card/>
    </div>
    <div class="carousel-item">
    <Card2/>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon dar" aria-hidden="true"></span>
    <span class="sr-only ">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        </div>
        <Footer/>
        </div>
    )
}
