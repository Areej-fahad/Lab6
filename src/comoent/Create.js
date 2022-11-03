import React ,{useState} from 'react'
import axios from 'axios'
import {useNavgate} from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'


function create() {
    const [fname,setFName]= useState()
    const [lname,setLName]= useStat
    e()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const postData =()=>{
        // axios.get("https://636255047521369cd06ac6c5.mockapi.io/Todo").then((res)=>{
        axios.post("https://636255047521369cd06ac6c5.mockapi.io/Todo",{
            fname,
            lname,
            email,
            password
    }).then((res)=>{
console.log(res)
    })
}
  return (



    
    <div>

        <input placeholder='fName' onChange={(e)=>{
            setFName(e.target.value)
        }}></input>
        <input placeholder='lName' onChange={(e)=>{
            setLName(e.target.value)
        }}></input><input placeholder='Email' onChange={(e)=>{
            setEmail(e.target.value)
        }}></input><input placeholder='Password' onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>
        <button onClick={postData}>Login</button>
        

  



</div>
  )
}

export default create