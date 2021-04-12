import {combineReducers, configureStore} from '@reduxjs/toolkit';
import homeReducer from '../pages/home/store/homeStore';
// import {feature1Reducer} from '../Pages/feature1/store/reducers/feature1Reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  // feature1: feature1Reducer,
});

const store = configureStore({reducer: rootReducer});

export default store;


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import userReducer from './slices/userSlice'

// export default configureStore({
//   reducer: {
//       user: userReducer,
//   },
// })

// const reducer = reqeire('./reducers')


// const firstMiddleware = (store) => (next) => (action) => {
//     console.log('로깅', action);
//     next(action);
// }
// const store = configureStore({
//     reducer,
//     middleware: [firstMiddleware, ...getDefaultMiddleware()],
//     devTools: process.env.NODE_ENV !== 'production',
//     // enhancers
// })

// module.exports = store;