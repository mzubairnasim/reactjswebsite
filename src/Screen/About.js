import React from 'react'
import Footer from './Footer'

export default function About() {
    return (
        <div>
        <div className='container'>
            <div className='text-center font-weight-bold display-4 text-capitalize'>
                <h2  className='font-weight-bold display-4 mb-4'>what do we offer</h2>
            </div>
            <div className='row mb-4'>
                <div className='col-lg-6 col-md-12 col-12 m-auto'>

                        <div>
                        <h3>html</h3>
                        <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" 
                        style={{width:500}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                        </div>

                        <div>
                        <h3>css</h3>
                        <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" 
                        style={{width:400}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                        </div>

                        <div>
                        <h3>javascript</h3>
                        <div class="progress">
                        <div class="progress-bar bg-dark" role="progressbar" 
                        style={{width:400}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                        </div>

                        <div>
                        <h3>node js</h3>
                        <div class="progress">
                        <div class="progress-bar  bg-warning" role="progressbar" 
                        style={{width:300}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                        </div>


                        <div>
                        <h3>mongo db</h3>
                        <div class="progress">
                        <div class="progress-bar  bg-danger" role="progressbar" 
                        style={{width:380}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                        </div>

                </div>

                <div className='col-lg-6 col-md-10 col-10 mt-4 maboutone'>
                        <div className='d-flex '>
                        <div>
                        <i class="fa fa-heart fa-3x text-dark p-3" ></i>
                        </div>
                        <div>
                            <h3>Web Developer</h3>
                            <p>We make tutorials of all the Programming and Scripting languages to help for free.</p>
                        </div>
                        </div>
                        <div className='d-flex'>
                        <div>
                        <i class="fa fa-lock fa-3x text-dark p-3" ></i>
                        </div>
                        <div>
                            <h3>University Important Topics</h3>
                            <p>We also covers all the important topics as per university to help
                             students to understant topic easily..</p>
                        </div>
                        </div>
                        <div className='d-flex'>
                        <div>
                        <i class="fa fa-magic fa-3x text-dark p-3" ></i>
                        </div>
                        <div>
                            <h3>Technical Article</h3>
                            <p>We write articles on current and Interesting Technicals Topic
                             to spread knowledge and sometimes on Social Causes too.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
