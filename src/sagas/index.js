import { call, fork, take, put, delay } from "redux-saga/effects";
import * as types from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import { fetchListTaskFailed, fetchListTaskSuccess } from "../actions/task";
import { hideLoading, showLoading } from "../actions/ui";

function* watchFetchListTaskAction() {
  while (true) {
    yield take(types.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    console.log(resp);
    const { data, status } = resp;
    if (status == STATUS_CODE.SUCCESS) {
      yield delay(1000);
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log("watch");
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
