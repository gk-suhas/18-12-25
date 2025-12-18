import { createSelector } from "@reduxjs/toolkit";
const selectCart=(state)=>state.cart
export const selectTotalPrice=createSelector(
    [selectCart],
    (cart)=>{
        return cart.items.reduce(
            (sum,item)=> sum+item.price,0
        )
    }
)