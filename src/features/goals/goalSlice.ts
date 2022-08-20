import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState : any = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message : ""
}

export const goalSlice = createSlice({
    name: "goals",
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    }
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer