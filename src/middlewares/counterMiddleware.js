import { takeEvery, put, call, /*select,*/ all } from "redux-saga/effects";
import * as API from "../api/counterApi";
import * as ACTION from "../constants/counterActionTypes";

function* counterWatcher() {
  yield takeEvery(ACTION.FETCH_USERS, fetchUsersMiddleware); // action
}

function* fetchUsersMiddleware(action) {
  const { payload } = action;
  try {
    // const { users } = yield select((state) => state.contactReducer); // get reducer state
    const response = yield call(API.fetchUsers, action.payload);
    let responseData = response;
    yield put({ type: ACTION.ADD_USERS, payload: responseData }); // save to reducer
    if (payload.callback) payload.callback(response?.data);
  } catch (error) {
    console.log(error);
  }
}

export default function* counterMiddleware() {
  yield all([counterWatcher()]);
}
