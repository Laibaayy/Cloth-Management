import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./src/Components/User/UserSlice"
import CartReducer from "./src/Components/Cart/CartSlice"


const store = configureStore({
    reducer:{
        UserData:UserReducer,
        CartData:CartReducer
    }
})

export default store