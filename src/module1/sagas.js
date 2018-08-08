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
 * It will call api to cretae group in db
 * @param {*} action 
 */
function* createGroup(action) {
  try {
     const user = yield call(post,url.createGroup,action.data);
     yield put({type: "GROUP_CREATE_SUCCEEDED", user: user});
  } catch (e) {
     yield put({type: "GROUP_CREATE_FAILED", message: e.message});
  }
}



function* module1Saga() {
  yield all ([
    takeLatest("GROUP_CREATE_REQUESTED", createGroup)
  ]);
}

export default module1Saga;



