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
        updateEndTimeWork: (state, action) => {
            const { id, end } = action.payload;

            const updatedWorks = state.works_ar.map(work => {
                if (work.id == id) {
                    return {
                        ...work,
                        timeEnd: work.timeEnd == '' ? end : ''
                    };
                }
                return work;
            });

            return {
                ...state,
                works_ar: updatedWorks
            };
        },
        addEducation: (state, action) => {
            state.educations_ar.push(action.payload.edu);
        },
        updateEndTimeEducation: (state, action) => {
            const { id, end } = action.payload;

            const updatedEducations = state.educations_ar.map(edu => {
                if (edu.id == id) {
                    return {
                        ...edu,
                        timeEnd: edu.timeEnd == '' ? end : ''
                    };
                }
                return edu;
            });

            return {
                ...state,
                educations_ar: updatedEducations
            };
        },
    }
})

export const { addWork, addEducation, updateEndTimeWork, updateEndTimeEducation } = resumeSlice.actions;
export default resumeSlice.reducer;