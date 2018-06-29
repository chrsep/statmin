import { takeLatest } from "redux-saga/effects"
import { updateRepos } from "../repos/reposSaga"
import { LOGIN_USER } from "./userAction"

export function* login() {
  yield* updateRepos()
}

export default function* userSaga() {
  yield takeLatest(LOGIN_USER, login)
}
