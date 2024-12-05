// import React, { useEffect , useState} from 'react'


// const Counter = () => {
//     const[count,setCount]=useState(0)
//       const[count1,setCount1]=useState(0)
      
//       function handleIncrement(){
//         setCount(count+1)
//  }
//  function handleDecrement(){
//     setCount(count-1)
//  }
//  useEffect(()=>{
//     setCount1(count*2);
//  },[count])
//   return (
//     <div>
//         <h1>Counter 1:{count}</h1>
//         <br />
//         <h1>Counter2:{count1}</h1>
//         <br />
//       <button id='inc'onClick={handleIncrement}>Increment</button>
//       <button id="dec" onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }

// export default Counter;
import React from 'react'
import { useState } from 'react'
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div id='counter'>
        <h1>Count is {count}</h1>
        <button id='inc' onClick={()=>setCount(count+1)}>increase count</button>
        <button id='dec' onClick={()=>setCount(count-1)}>decrease count</button>
    </div>
  )
}

export default Counter
