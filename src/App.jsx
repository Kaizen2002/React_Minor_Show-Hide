import { useState } from 'react'
import './App.css'

function App() {

  let[pstatus, SetPstatus] = useState(false)

  return (
    <>
        <h1>Project - Passwod show and Hide</h1>
        <div>
          <input type= {pstatus ? "text" : "password"} />
          <button onClick={()=>{SetPstatus(!pstatus)}}>{pstatus? "Hide" : "Show"}</button>
        </div>
        
    </>
  )
}


export default App
