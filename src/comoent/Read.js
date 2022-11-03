import React from 'react'
import {useNevigat} from "react-router-dom"
import
function Read() {
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
            <Butten> get</Butten>

            </>
            )
          })}
    
  )
}

export default Read