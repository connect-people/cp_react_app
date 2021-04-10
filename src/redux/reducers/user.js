import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isLoggingIn : false,
    data: null,
}
const userSlice =  createSlice({
    name: 'user',
    initialState,
    //동기적 리듀서, 내부적인
    reducers: {
        //비동기임
        logOut(state, action){
            state.data = null
        }

    },
    // 디동기적 리듀서, 외부적인 
    extraReducers: {

    }
})

module.exports = userSlice;