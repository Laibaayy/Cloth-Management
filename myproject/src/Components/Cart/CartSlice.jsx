import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddItem(state, action) {
            state.cart.push(action.payload)
        },
        DeleteItem(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        incrementItem(state, action) {
            const item = state.cart.find((items) => items.id === action.payload)
            item.quantity++,
                item.totalPrice = item.quantity * item.Price
        },
        decrementItem(state, action) {
            const item = state.cart.find((items) => items.id === action.payload)
            item.quantity--,
                item.totalPrice = item.quantity * item.Price
        },
        clearCart(state) {
            state.cart = []
        }
    }
})

export const { AddItem, DeleteItem, decrementItem, incrementItem, clearCart } = CartSlice.actions
export default CartSlice.reducer