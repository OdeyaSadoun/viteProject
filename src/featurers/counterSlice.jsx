import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    counter: 88,
    user: "koko 22"
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initValue,
    reducers: {
        add1: (state, action) => {
            state.counter++;
            state.user = "maor";
        },
        reset: (state, action) => {
            state.counter = 0;
            state.user = "koko";
        },
        addCustom: (state, action) => {
            state.counter += action.payload.val;
            state.user = "odeya";
        },
        reduceCustom: (state, action) => {
            state.counter -= action.payload.val;
            state.user = "rivki";
        }
    }

})

export const { add1, reset, addCustom, reduceCustom } = counterSlice.actions;
export default counterSlice.reducer;