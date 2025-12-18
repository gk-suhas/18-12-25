import { createReducer } from "@reduxjs/toolkit";

const initialState={
    value:0
}

const counterReducer=createReducer(initialState,(builder)=>{
    builder.addCase("counter/increment",(state)=>{
        state.value+=1
    })
    builder.addCase("counter/decrement",(state)=>{
        state.value-=1
    })
})
export default counterReducer