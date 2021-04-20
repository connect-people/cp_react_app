import { all } from 'redux-saga/effects'
import dataSaga from '../saga'
export default function* sagas() {
    yield all([
        dataSaga(),
    ]);
}