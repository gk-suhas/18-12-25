import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch({type:"counter/increment"})}}>+</button>
    <button onClick={()=>{dispatch({type:"counter/decrement"})}}>-</button>
    </>
  )
}

export default App