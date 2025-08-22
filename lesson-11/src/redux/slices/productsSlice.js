import products from "@/data/products"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsList: products,
    filter: '',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.productsList.push(action.payload)
        },
        filterProductByName: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addProduct, filterProductByName } = productsSlice.actions

export default productsSlice.reducer