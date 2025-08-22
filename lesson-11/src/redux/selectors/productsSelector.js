import { createSelector } from "@reduxjs/toolkit";

const selectProducts = (state) => state.products.productsList
const selectFilter = (state) => state.products.filter

export const selectFilteredProducts = createSelector(
    [selectProducts, selectFilter],
    (productsList, filter) => productsList.filter(prod => prod.name?.toLowerCase().includes(filter.toLowerCase()))
)
