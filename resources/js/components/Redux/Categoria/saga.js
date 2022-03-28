import { ACTION_TYPE } from "./actionType";
import {
    getFilterCategoria
} from './action'
import { takeEvery } from "redux-saga/effects";



function* fetchFilter({ payload: data }) {

    try {
        const response = yield call(fetchApiFilter, data)
        console.log("response", response)
        // yield put(getFilterSuccess(response))
    } catch (error) {
        // yield put(getFilterFail(error))
    }
}



function* categoriaSaga() {
    yield takeEvery(ACTION_TYPE.LIST_CATEGORIA,fetchFilter)
  }
  
  export default categoriaSaga
  