/**
 * NPM imports
 */
import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { connect } from 'mongoose';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const user = yield call(fetchUser1,'data');
      console.log('--user',user)
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}



/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;



export function fetchUser1(userId) {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get('http://localhost:8080/api/data/customercollection').then((response) => {
        return response.data
    })
    .catch((error) => {
      throw error
    });
  };