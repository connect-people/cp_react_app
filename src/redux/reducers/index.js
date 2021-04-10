import { combineReducers } from 'redux';
import userSlice from './user';
import postSlice from './post';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    post: postSlice.reducer,
})

export default rootReducer;



``
// import { combineReducers } from 'redux';
// import userReducer from './userReducer';
// import postReducer from './postReducer';

// const rootReducer = combineReducers({
//     userReducer,
//     postReducer,
// })

// export default rootReducer;