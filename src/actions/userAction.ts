// @flow
export type ChangeAccessToken = {
  readonly type: "CHANGE_ACCESS_TOKEN"
  readonly token: string
}

export default function changeAccessToken(token: string): ChangeAccessToken {
  return { type: "CHANGE_ACCESS_TOKEN", token }
}
