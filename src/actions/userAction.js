// @flow
export type ChangeAccessToken = {
  +type: "CHANGE_ACCESS_TOKEN",
  +token: string
}

export default function changeAccessToken(token: string): ChangeAccessToken {
  return { type: "CHANGE_ACCESS_TOKEN", token }
}
