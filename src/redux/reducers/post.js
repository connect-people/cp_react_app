import { createSlice } from '@reduxjs/toolkit';

const postSlice =  createSlice({
    name: 'post',
    initialState,
    //동기적 리듀서, 내부적인
    reducers: {

    },
    // 디동기적 리듀서, 외부적인 
    extraReducers: {

    }
})

module.exports = postSlice