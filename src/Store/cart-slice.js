import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";




const CartSlice = createSlice({
    
    name : "Cart",
    initialState : {
        showModal : false, 
        cart : [],
    }, 
    reducers :  {
changeModal : (state , action ) => {
    state.showModal = !state.showModal
},
getData : (state , action)=>{
    state.productId =  action.payload;
    
}
    }
})


export const CartSliceAction = CartSlice.actions;

export default CartSlice;