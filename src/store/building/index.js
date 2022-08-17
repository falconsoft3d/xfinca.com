import { createSlice } from "@reduxjs/toolkit";

export const buildingSlice =  createSlice({
    name: 'building',
    initialState : {
        id :  localStorage.getItem('building_id') ? JSON.parse(localStorage.getItem('building_id')) : "VvKbgQOH9pOtX8vHLaSJ"
    },
    reducers: {
        updateId: (state, { payload } ) => {
            // Guardamos en el Localstore.
            const serializedState = JSON.stringify(payload);
            localStorage.setItem('building_id', serializedState);
            // Cambiamos el estado.
            state.id = payload;
        }
    }
});

export const { updateId } = buildingSlice.actions;