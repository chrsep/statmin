export const getToken = (state: any) => {
  return state.get("user").get("accessToken")
}
