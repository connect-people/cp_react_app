import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'

export default configureStore({
  reducer: {
      user: userReducer,
  },
})

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