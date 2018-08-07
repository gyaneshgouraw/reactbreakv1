/**
 * NPM imports
 */

import { call, put, takeEvery, takeLatest , all} from 'redux-saga/effects'

/**
 * File imports
 */
import {get , post } from '../common/wrapper'
import { url } from '../common/global.config'

/**
 * This function will fetch list of  registered users
 * @param {*} action 
 */
function* fetchUser(action) {
   try {
      const user = yield call(get, url.userlist);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/**
 * 
 * @param {*} action 
 */
function* createUser(action) {
  try {
     const user = yield call(post,url.createUser,action.data);
     yield put({type: "USER_CREATE_SUCCEEDED", user: user});
  } catch (e) {
     yield put({type: "USER_CREATE_FAILED", message: e.message});
  }
}

/**
 * This method is used for checking user login 
 * @param {*} action 
 */
function* checkUserLogin( action) {
  try {
    const user = yield call(post,url.checkLogin,action.data);
    yield put({type: "USER_LOGIN__SUCCEEDED", user: user});
 } catch (e) {
    yield put({type: "USER_LOGIN__FAILED", message: e.message});
 }
}



/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield all ([
    takeLatest("USER_FETCH_REQUESTED", fetchUser),
    takeLatest("USER_CREATE_REQUESTED", createUser),
    takeLatest("USER_LOGIN_REQUESTED", checkUserLogin)
  ]);
}

export default mySaga;



