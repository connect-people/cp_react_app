import * as types from './types'

const initState = {
    keywords: ''
}

const searchReducer = (state = initState, action) => {
    switch (action.type){
        case types.GET_SEARCH_KEYWORD.SUCCESS: {
            console.log('action.payload', action.payload)
            return {
                ...state,
                keywords: action.payload,
            }
        }
        case types.GET_SEARCH_KEYWORD.FAIL: {
            return {...state }
        }
        default:
            return { ...state }
    }
}

export default searchReducer;