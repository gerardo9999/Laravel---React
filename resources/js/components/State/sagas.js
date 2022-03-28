import { all, fork } from "redux-saga/effects"
import categoriaSaga from "../Redux/Categoria/saga";



export default function* rootSaga(){
    yield all([
        fork(categoriaSaga)
    ]);
}