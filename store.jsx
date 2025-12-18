import todoReducer from './todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const Store=configureStore({
    reducer:{
        todos:todoReducer
    }
})
export default Store