import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    items:[],
    status:null,
   
};
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async()=>{
       
     const response = await   axios.get("https://clothes-shopvn.herokuapp.com/api/auth/products")
     return response?.data;
      
    }
);
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending]:(state,action) =>{
            state.status = "pending"
        },
        [productsFetch.fulfilled]:(state,action) =>{
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]:(state,action) =>{
            state.status = "rejected";
          
        }
    }
});

export default productsSlice.reducer;