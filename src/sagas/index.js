import {
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as types from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import { fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess } from "../actions/task";
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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  console.log("watch", payload);
  const { keyword } = payload;
  const list = yield select((state) => state.task.listTask);
  const filteredTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );
  console.log(filteredTask);
  yield put(filterTaskSuccess(filteredTask))
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(types.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
