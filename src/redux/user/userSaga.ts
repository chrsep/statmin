import axios from "axios"
import { all, fork, takeLatest } from "redux-saga/effects"
import { GET_REPO_LIST, userActions } from "./userAction"

export function* getRepoList(
  action: ReturnType<typeof userActions.getRepoList>
) {
  yield axios.get("https://github.com//user/repos")
}

export function* watchGetRepoList() {
  yield takeLatest(GET_REPO_LIST, getRepoList)
}

export default function* userSaga() {
  yield all([fork(watchGetRepoList)])
}
