/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: "Estado inicial",
};

// Acción asíncrona simulada
export const fetchValue = createAsyncThunk("mySlice/fetchValue", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ value: 42 });
        }, 2000); // Simula un retraso de 2 segundos
    });
});

const mySlice = createSlice({
    name: "mySlice",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchValue.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchValue.fulfilled, (state, action) => {
                state.status = "idle";
                state.value = action.payload.value;
            })
            .addCase(fetchValue.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { increment, decrement } = mySlice.actions;
export default mySlice.reducer;
