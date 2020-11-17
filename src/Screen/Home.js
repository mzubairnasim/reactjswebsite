import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Footer from './Footer'
export default function Home() {
    return (
        <div>
        <div className='bg'>
           <div className='text-center homeone'>
                <h1 className='font-weight-bold homethree'>Welcome To Our Studio</h1>
                <h4 className='hometwo'>Its Nice To Meet You</h4>
               <Link to='/about'><button type="button" class="btn btn-info btn-lg">Click for More Info</button></Link> 
           </div>
           </div> 
           <Footer/>
        </div>
    )
}
