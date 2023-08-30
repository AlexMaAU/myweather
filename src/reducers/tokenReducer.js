import { createSlice } from "@reduxjs/toolkit";

// 1. Create reducer - put all operational logic of one State into one reducer
const tokenSlice = createSlice({  // Create a redux slice
    name:'auth',  //Slice name
    initialState: {  //State value
        token: localStorage.getItem('token') || ''
    },
    reducers: {   // all operational logic of token State
        LOGIN: (state, action) => {  // state表示当前状态，action表示由UI组件传递过来的action对象。
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