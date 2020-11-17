import React,{useState} from 'react'
import one from '../assets/img/profile1.jpg'
import two from '../assets/img/profile2.jpg'
import three from '../assets/img/profile3.jpeg'
import '../App.css'
export default function Card() {
    const [card, setcard] = useState([
        {title:"zubair",text:"Web developer",img:one},
        {title:"johnas",text:"Web developer",img:two},
        {title:"julie",text:"Web developer",img:three},
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
