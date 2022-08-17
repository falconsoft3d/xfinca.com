import { configureStore } from "@reduxjs/toolkit";
import { buildingSlice } from './building'

export const store = configureStore({
    reducer : {
        building : buildingSlice.reducer
    }
})