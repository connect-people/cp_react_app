import { call, put, takeEvery, all } from 'redux-saga/effects'
import http from '../API/http'
import * as actions from './actions'
import * as types from './types'
const host_api = 'https://api.connect-people.club'

function* fetchGetSearchKeyword(actions) {
    const { data } = yield call (http.get, {
        url: `${host_api}/v1/board/search-brand`,
        params: actions.payload,
    });
    try {
        yield put(actions.getSearchKeyword.success(data));
    } catch (error){
       // yield put(actions.getSearchKeyword.fail(data))
    }
}

export default function* dataSaga(){
    yield all([
        takeEvery(types.GET_SEARCH_KEYWORD.INDEX, fetchGetSearchKeyword),
    ])
}