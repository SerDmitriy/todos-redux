const A_AuthRequest = () => ({
  type: "AUTH_REQUEST"
})
const A_AuthSuccess = (payload) => ({
  type: "AUTH_SUCCESS",
  payload
})
const A_AuthFailed = (payload) => ({
  type: "AUTH_FAILED",
  payload
})
const A_AuthClear = () => ({
  type: "AUTH_CLEAR"
})

export {
  A_AuthRequest,
  A_AuthSuccess,
  A_AuthFailed,
  A_AuthClear
}
