import { createAction } from 'redux-actions';
import * as types from './types'


// ui 관련 action
function makeActionCreator(actionType){
    return createAction(actionType);
}

// api data 관련 action
function makeAsyncActionCreator(actions){
    let actionCreator = makeActionCreator(actions.INDEX);
    actionCreator.success = makeActionCreator(actions.SUCCESS);
    actionCreator.fail = makeActionCreator(actions.FAIL);
    return actionCreator;
}

export const getSearchKeyword = makeAsyncActionCreator(types.GET_SEARCH_KEYWORD)