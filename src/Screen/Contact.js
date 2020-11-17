import React,{useState} from 'react'
import '../App.css'
import Footer from './Footer'
export default function App() {
  const [name, setname] = useState("")
  const [namerror, setnamerror] = useState('')

  const [email, setemail] = useState("")
  const [emailerror, setemailerror] = useState("")

  const [password, setpassword] = useState("")
  const [passworderror, setpassworderror] = useState("")

  const [confirmpassword, setconfirmpassword] = useState("")
  const [confirmpassworderror, setconfirmpassworderror] = useState("")

  const [phone, setphone] = useState("")
  const [phoneerror, setphoneerror] = useState("")

  const submit=(e)=>{
      e.preventDefault()

      let namevalid=''
      let emailvalid=''
      let passwordvalid=''
      let confirmpasswordvalid=''
      let phoneerrorvalid=''

      if(name===""){
           namevalid='please write name'
      }
      if(namevalid){
          setnamerror(namevalid)
          return false
      }
      if(name.length<3 || name.length>8){
              namevalid='letters between 3 to 8'
      }
      if(namevalid){
          setnamerror(namevalid)
          return false
      }
      if(!isNaN(name)){
          namevalid='only letters allowed'
      }
      if(namevalid){
          setnamerror(namevalid)
      }



     if(email===""){
          emailvalid='please write email'
     }
     if(emailvalid){
         setemailerror(emailvalid)
         return false
     }
     if(!email.includes("@")){
       emailvalid='email must contains @'
     }
     if(emailvalid){
         setemailerror(emailvalid)
         return false
     }



     if(password===""){
      passwordvalid='please write password'
      }
      if(passwordvalid){
          setpassworderror(passwordvalid)
          return false
      }
      if(password.length<=3||password.length>10){
          passwordvalid='password must be 3 to 10'
      }
      if(passwordvalid){
          setpassworderror(passwordvalid)
          return false
      }



      if(password!==confirmpassword){
          confirmpasswordvalid='password not matches'
      }
      if(confirmpasswordvalid){
          setconfirmpassworderror(confirmpasswordvalid)
          return false
      }

      if(phone===""){
        phoneerrorvalid='please fill'
    }
    if(phoneerrorvalid){
        setphoneerror(phoneerrorvalid)
        return false
    }


    if(isNaN(phone)){
        phoneerrorvalid='letters not allowed'
    }
    if(phoneerrorvalid){
        setphoneerror(phoneerrorvalid)
        return false
    }
      else{
          setname("")
          setnamerror("")
          setemail("")
          setemailerror("")
          setpassword("")
          setpassworderror("")
          setconfirmpassword("")
          setconfirmpassworderror("")
          setphone("")
          setphoneerror("")
          alert("Your response is successfully saved")
      }
      return true
    

  }

  
  return (
    <div>
    <div className='header'>
          <div className='one'>
          <div className='two'>
            <div className='three'>
              <h1>LOGIN</h1>
              <p>login to your account</p>
            </div>
             
            

              <form onSubmit={submit}>
            <input type='text' value={name} onChange={e=>setname(e.target.value)} 
            placeholder='Enter Name' /><br/>
            {namerror}<br/>

            <input type='text' value={email} onChange={e=>setemail(e.target.value)}
                placeholder='Enter Email'
            /><br/>
            {emailerror}<br/>

            <input type='password' value={password} onChange={e=>setpassword(e.target.value)}
                placeholder='Enter Password'
            /><br/>
            {passworderror}<br/>

            <input type='password' value={confirmpassword} onChange={e=>setconfirmpassword(e.target.value)}
                placeholder='Enter Password'
            /><br/>
            {confirmpassworderror}<br/>

            <input type='text' value={phone} onChange={e=>setphone(e.target.value)} 
                placeholder='Enter Phone'
            /><br/>
            {phoneerror}<br/>

            <button type='submit'>Submit</button>
        </form>


          </div>
          </div>
                
         
    </div>
    <Footer/>
   </div>
  )
}