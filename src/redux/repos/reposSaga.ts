import { call, put, select, takeLatest } from "redux-saga/effects"
import { githubApi } from "../../githubApi"
import { Actions } from "../actions"
import { getToken } from "../selector"
import { UPDATE_REPOS } from "./reposAction"

export function* updateRepos() {
  const token = yield select(getToken)
  const repos = yield call(githubApi.getRepos, token)
  yield put(Actions.setRepos(repos))
}

export default function* reposSaga() {
  yield takeLatest(UPDATE_REPOS, updateRepos)
}
