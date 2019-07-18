import ACTIONS from "../actions";
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchPeoples() {
  const json = yield fetch('https://swapi.co/api/people')
        .then(response => response.json() );  
  yield put({ type: ACTIONS.Types.RECEIVE_API_DATA, payload: json.results });
}

function* fetchPlanets() {
  let json = yield fetch('https://swapi.co/api/planets/')
        .then(response => response.json() );  
  yield put({ type: ACTIONS.Types.SET_PLANETS, payload: json.results });
  debugger;
  while (json.next && json.next!==null) {
     json = yield fetch(json.next)
        .then(response => response.json() );  
  yield put({ type: ACTIONS.Types.SET_PLANETS, payload: json.results });
  }
}

function* actionWatcher() {
     yield takeLatest(ACTIONS.Types.REQUEST_API_DATA, fetchPeoples)
}

function* getPlanetsWatcher() {
  console.log('Watcher getPlanetsWatcher');
   yield takeLatest(ACTIONS.Types.REQUEST_API_GETPLANETS, fetchPlanets)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   getPlanetsWatcher()
   ]);
}