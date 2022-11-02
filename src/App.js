import './App.css';
 import React from 'react'
 import Create from './comoent/Create';
 import axios from "axios" 
import {useState,useEffect} from "react"
 function App() {
  const [state,setState]=useState([])
  useEffect(() => {
    axios.get("https://636255047521369cd06ac6c5.mockapi.io/Todo").then((res)=>{
    
    //       // console.log(res.data)
          setState(res.data)
        })
      })
   return (
    <div>

        {state.map((item)=>{
          return (
          <>
          {item.fname}
          <br></br>
          </>
          )
        })}
        <Create> </Create>
        
        
    </div>
   )
 }
 
 export default App
