import { createSlice } from '@reduxjs/toolkit';
import { debug } from 'react-native-reanimated';


const userSlice =  createSlice({
    name: 'user',
    initialState: {
        isLoggingIn : false,
        data: null,
    },
    //동기적 리듀서, 내부적인
    reducers: {
        //비동기임
        logOut(state, action){
            state.data = null
        },
        // increment: (state) => {
        //     debug.log('DEBUG : ', debug)
        // }

    },
    // 디동기적 리듀서, 외부적인 
    extraReducers: {

    }
})

// export const { increment } = userSlice.actions;
export default userSlice.reducer;