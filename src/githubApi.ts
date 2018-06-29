import Axios from "axios"

const axios = (token: string) =>
  Axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token: ${token}`
    }
  })

/**
 * List repositories that the authenticated user has explicit
 * permission (:read, :write, or :admin) to access.
 *
 * https://developer.github.com/v3/repos/#list-your-repositories
 */
const getRepos = (token: string, params: UserReposParams = {}) => {
  return axios(token).get<string[]>("/user/repos", { params })
}
interface UserReposParams {
  visibility?: string
  affiliation?: string
  type?: string
  sort?: string
  direction?: string
}

export const githubApi = {
  getRepos
}
