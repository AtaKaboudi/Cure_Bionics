import "./signup.scss";
import logo from '../../cure.png'
import { useState } from "react";
export default function Signup() {

  let [holderEmail,setHodlerEmail]= useState('Email')
  let [holderPassword,setHodlerPassword]= useState('Password')
  let [holderId,setHodlerId]= useState('CureId')
  
  return (
    <div className="signup">
      <img alt="logo" src={logo}/>
      <h1>digibionics</h1>
      <h2>Partner</h2>
        <form>
          <h1>Sign In</h1>
          <input type="text" placeholder={holderEmail} onClick={()=>{setHodlerEmail('')}} onChange={(e)=>setHodlerEmail(e.target.textContent)} />
          <input type="password" placeholder={holderPassword} onClick={()=>{setHodlerPassword('')}} onChange={(e)=>setHodlerPassword(e.target.textContent)} />
          <input type="password" placeholder={holderId} onClick={()=>{setHodlerId('')}} onChange={(e)=>setHodlerId(e.target.textContent)} />
        <button> Login
        <span class="material-icons">
        chevron_right
        </span>
          </button>
     
        </form>
    </div>
  );
}
