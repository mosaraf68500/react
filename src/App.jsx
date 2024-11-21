import { useState } from 'react'
import './App.css'
import Users from './useEffect';


function App() {

  const btn1 = ()=>{
    alert('btn1 clicked');
  }

  const btn2 =()=>{
    alert('btn2 clicked');
  }

  const addToFive =(num)=>{
    alert(num+5);
  }

  return (

    <div>
    <h1>react evenHandler</h1>
    <button onClick={btn1}>btn1</button>
    <button onClick={btn2}>btn2</button>
    <button onClick={()=>addToFive(3)}>btn3</button>
   <Users></Users>


    </div>
  )
}

export default App
