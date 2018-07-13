import { takeLatest, put, call } from 'redux-saga/effects';
import {
       GET_HOME, GET_HOME_SUCCESSFUL, GET_HOME_FAILURE
      } from './home-actions.js';

export function* getHome(action) {
 try {
 	let response = yield call(api.home.get);
 	if (response.error || !(response.token) ) {
  	yield put({ type: GET_HOME_FAILURE, payload: response});
	} 
	else {
	  yield put({ type: GET_HOME_SUCCESSFUL, payload: response});
	}
	return;
	} catch (e) {

 }
}

// A single entry point to start all the sagas at once. Using a generator function.
export default function* HomeSaga() {
 yield takeLatest(HOME, getHome);
}
