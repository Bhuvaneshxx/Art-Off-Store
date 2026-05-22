import { configureStore } from "@reduxjs/toolkit"
import cartSLiceReducer from "./CartSlice"

const Store=configureStore({
    reducer:{
        cart:cartSLiceReducer
    }
})
export default Store