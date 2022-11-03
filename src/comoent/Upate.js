import React from 'react'
import axios from "axios"
import ReactDOM from 'react-dom/client';
import {useState,useEffect}
import {useNavgate} from "react-router-dom"
import create from './create';
function Upate() {
    const nevigat = useNavgate()
    const [fname,setFName]= useState("")
    const [lname,setLName]= useState("")
    const [id,setId]=useState("")
    // let url ("https://636255047521369cd06ac6c5.mockapi.io/Todo")
  return (
    useEffect(){
setId.localStorge.getIttem("id")
setFName.localStorge.getIttem("Fname")
setLName.localStorge.getIttem("LName")}[]);
const updateData=((=>){
    axios.put(`https://636255047521369cd06ac6c5.mockapi.io/Todo` ${id}),{

fname,
lname,

    })



}.then(res=>){
    console.log(res)
    navigate(/create);
}

return(
<input placeholder='fname' onChange={(e)=>(e.target.value)}</input>
<input placeholder='Lname' onChange={(e)=>(e.target.value)}</input>
<button onClick={update}> submit </button>


)
export default Upate