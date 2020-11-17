import React from 'react'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import About from './Screen/About'
import Contact from './Screen/Contact'
import Home from './Screen/Home'
import Navbar from './Screen/Navbar'
import './App.css'
import Instructors from './Screen/Instructors'
import Location from './Screen/Location'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/ins' component={Instructors}></Route>
          <Route exact path='/location' component={Location}></Route>
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

