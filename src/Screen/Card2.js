import React,{useState} from 'react'

import '../App.css'
export default function Card() {
    const [card, setcard] = useState([
        {title:"khan",text:"Web developer",img:"https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg"},
        {title:"alia",text:"Web developer",img:"https://cdn.pixabay.com/photo/2017/04/06/19/34/girl-2209147__340.jpg"},
        {title:"momoa",text:"Web developer",img:"https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"},
    ])
    return (
        <div className='cardone pb-4'>
        {card.map((value)=>{
            return <div className='m-4  check' >
            <div class="card" >
                <img class="card-img-top" src={value.img} alt="Card image cap" style={{width:328,height:300}}/>
            <div class="card-body text-center text-capitalize">
                <h5 class="card-title font-weight-bold">{value.title}</h5>
                <h6>{value.text}</h6>
            </div>
            </div>
            </div>
        })}
       
        </div>
    )
}
