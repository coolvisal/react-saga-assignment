import ACTIONS from "../actions";
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('https://swapi.co/api/people')
        .then(response => response.json(), );  
        console.log('saga',json)  
  yield put({ type: ACTIONS.Types.RECEIVE_API_DATA, payload: json });
}

function* actionWatcher() {
    console.log('Watcher');
     yield takeLatest(ACTIONS.Types.REQUEST_API_DATA, fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}