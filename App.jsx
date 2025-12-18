import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './counterActions'
function App() {
  const dispatch=useDispatch()
  const value=useSelector((state)=>state.counter.value)
  return (
    <>
    <h1>{value}</h1>
    <button onClick={()=>dispatch(increment(1))}>+</button>
    <button onClick={()=>dispatch(decrement(-1))}>-</button>
    </>
  )
}

export default App