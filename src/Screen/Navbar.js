import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand"  to='/'><h1 className='lang ml-4'>CodersLab</h1></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item navone">
        <Link class="nav-link "  to='/'><h3 className='lang m-auto'>Home<span class="sr-only">(current)</span></h3></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link navone"  to='/about'><h3 className='lang m-auto'>About</h3></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link navone"   to='/ins'><h3 className='lang m-auto'>Instructors</h3></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link navone"   to='/contact'><h3 className='lang m-auto'>Contact</h3></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link navone"   to='/location'><h3 className='lang m-auto'>Where We Locate</h3></Link>
      </li>
    </ul>
  </div>
</nav>

        </div>
    )
}
