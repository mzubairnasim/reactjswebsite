import React,{useState} from 'react'
import '../App.css'
export default function Card() {
    const [card, setcard] = useState([
        {title:"zubair",text:"Web developer",img:"images/profile1.jpg"},
        {title:"ali",text:"Teacher",img:"https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg"},
        {title:"momo",text:"Technician",img:"https://cdn.pixabay.com/photo/2020/03/27/08/56/lake-4972944__340.jpg"},
        {title:"zubair",text:"Web developer",img:"images/profile1.jpg"},
        {title:"ali",text:"Teacher",img:"https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg"},
        {title:"momo",text:"Technician",img:"https://cdn.pixabay.com/photo/2020/03/27/08/56/lake-4972944__340.jpg"},
        {title:"zubair",text:"Web developer",img:"images/profile1.jpg"},
        {title:"ali",text:"Teacher",img:"https://cdn.pixabay.com/photo/2020/11/04/19/22/windmill-5713337__340.jpg"},
        {title:"momo",text:"Technician",img:"https://cdn.pixabay.com/photo/2020/03/27/08/56/lake-4972944__340.jpg"},
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
