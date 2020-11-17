import React from 'react'
import '../App.css'
export default function Footer() {
    return (
        <div className='footertwo'>
        <div className='container'>
            <h2 className='text-center'>Find us on</h2>
            <div className='footerone'>
            <div >
            <i class="fa fa-facebook fa-3x text-info p-3" ></i>
            </div>
            <div>
            <i class="fa fa-instagram fa-3x text-danger p-3" ></i>
            </div>
            <div>
            <i class="fa fa-twitter fa-3x text-primary p-3" ></i>
            </div>
            <div>
            <i class="fa fa-github fa-3x text-dark p-3" ></i>
            </div>
            </div>
            <h2 className='text-center pt-2'>Copyright © 2020,Design by Coders</h2>
        </div>
        </div>
    )
}
