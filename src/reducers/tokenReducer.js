import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'auth',
    initialState: {
        token: localStorage.getItem('token') || ''
    },
    reducers: {
        LOGIN: (state, action) => {
            localStorage.setItem('token', action.payload.token)
            state.token = action.payload.token
        },
        LOGOUT: (state) => {
            localStorage.removeItem('token')
            state.token = ''
        }
    }
})

export const {LOGIN, LOGOUT} = tokenSlice.actions
export default tokenSlice.reducer