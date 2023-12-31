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
        deleteWork: (state, action) => {
            const updatedWorks = state.works_ar.filter(work => work.id !== action.payload.work.id);
            return {
                ...state,
                works_ar: updatedWorks,
            };
        },
        updateEndTimeWork: (state, action) => {
            const { id, end } = action.payload;

            const updatedWorks = state.works_ar.map(work => {
                if (work.id == id) {
                    return {
                        ...work,
                        time_end: action.payload.isChecked ? end : ''
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
        deleteEducation: (state, action) => {
            const updatedEdus = state.educations_ar.filter(edu => edu.id !== action.payload.edu.id);
            return {
                ...state,
                educations_ar: updatedEdus,
            };
        },
        updateEndTimeEducation: (state, action) => {
            const { id, end } = action.payload;

            const updatedEducations = state.educations_ar.map(edu => {
                if (edu.id == id) {
                    return {
                        ...edu,
                        time_end: action.payload.isChecked ? end : ''
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

export const { addWork, deleteWork, addEducation, deleteEducation, updateEndTimeWork, updateEndTimeEducation } = resumeSlice.actions;
export default resumeSlice.reducer;