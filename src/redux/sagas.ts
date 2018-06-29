import { all, call } from "redux-saga/effects"
import reposSaga from "./repos/reposSaga"
import userSaga from "./user/userSaga"

export default function* root() {
  yield all([call(userSaga), call(reposSaga)])
}
