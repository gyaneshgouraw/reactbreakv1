

/** 
 * NPM imports
 */

import {all,fork} from 'redux-saga/effects'
/**
 * File imports
 */
import mySaga from './Login/sagas'
import  module1Saga  from './module1/sagas'

export default function* rootSaga() {
    yield [
        fork(mySaga),
        fork(module1Saga)
    ]

    // yield all([
    //     mySaga,
    //     module1Saga
    // ])
  }