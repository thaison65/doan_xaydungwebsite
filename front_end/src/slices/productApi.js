import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://clothes-shopvn.herokuapp.com/api/auth"}),
    endpoints:(builder)=>({
        getAllProducts: builder.query({
            query:() =>"products",
        }),
    }),
});
export const {useGetAllProductsQuery } = productApi;
