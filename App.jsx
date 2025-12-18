import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from './cartSelector'
function App() {
  const total=useSelector(selectTotalPrice)
  return (
    <div>{total}</div>
  )
}

export default App