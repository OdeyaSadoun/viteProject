import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    works_ar: [],
    educations_ar: []
}

const resumeSlice = createSlice({
    name: "resumes",
    initialState: initValue,
    reducers: {
        addWork: (state, action) => {
            state.works_ar.push(action.payload.work);
        },
        addEducation: (state, action) => {
            state.educations_ar.push(action.payload.education);
        }
    }
})

export const { addWork, addEducation } = resumeSlice.actions;
export default resumeSlice.reducer;