import { combineReducers } from 'redux';
import searchReducer from '../reducers'

const rootReducer = combineReducers({
    searchStore : searchReducer,
})

export default rootReducer;
