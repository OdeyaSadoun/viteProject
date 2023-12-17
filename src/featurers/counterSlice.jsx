import {createSlice} from "@reduxjs/toolkit";

const initValue = {
    counter: 88, 
    user: "koko 22"
}

const counterSlice = createSlice( {
    name: "counter",
    initialState: initValue,
    reducers:{
        add1: (state, sction) => {
            state.counter++;
            state.user = "maor";
        },
        reset: (state, sction) => {
            state.counter = 0;
            state.user = "koko";
        }
    }

})

export const{ add1, reset} = counterSlice.actions;
export default counterSlice.reducer;