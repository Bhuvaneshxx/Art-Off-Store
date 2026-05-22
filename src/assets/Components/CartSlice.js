import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem(state,action){
            state.push(action.payload)
        },
        removeItem(){

        }
    }
})
export default CartSlice.reducer

export let{addItem,removeItem}=CartSlice.actions;