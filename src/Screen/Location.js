import React from 'react'
import Footer from './Footer'

export default function Location() {
    return (
        <div>
        <div className='container mt-2 mb-4'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-6 ' >
            <iframe src="https://www.google.com/maps/d/embed?mid=1PQtm1Fz436m1gheT5wVPcT3MTwo"
             className='lone'></iframe>
            </div>
        </div>
         </div>
         <Footer/>
        </div>
    )
}
