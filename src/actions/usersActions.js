const A_AddUserRequest = () => ({
  type: "ADD_USER_REQUEST"
})
const A_AddUserSuccess = (payload) => ({
  type: "ADD_USER_SUCCESS",
  payload
})
const A_AddUserFailed = (payload) => ({
  type: "ADD_USER_FAILED",
  'payload': payload
})
const A_AddUserClear = () => ({
  type: "ADD_USER_CLEAR"
})

export {
  A_AddUserRequest,
  A_AddUserSuccess,
  A_AddUserFailed,
  A_AddUserClear
}