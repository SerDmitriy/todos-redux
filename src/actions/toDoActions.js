const statuses = ['Request', 'Success', 'Failed', 'Clear'];
const actions = [
  'Add_Todo',
  'Add_User',
  'Remove_Todo',
  'Fetch_Todo',
  'Fetch_Todos',
  'Checked_Todo',
  'Clear_Completed'];
const db = {};

actions.map(action => {
  db[action] = {};
  statuses.map(status => {
    db[action][status] = (payload, callback, options) => ({
      type: `${action}_${status}`.toUpperCase(),
      payload,
      callback,
      options
    })
  })
})
console.log(db)
// export db




// const A_AddTodoRequest = () => ({ type: "ADD_TODO_REQUEST" })
// const A_AddTodoSuccess = (payload) => ({
//   type: "ADD_TODO_SUCCESS",
//   payload
// })
// const A_AddTodoFailed = (payload) => ({
//   type: "ADD_TODO_FAILED",
//   payload
// })
// const A_AddTodoClear = () => ({ type: "ADD_TODO_CLEAR" })

// const A_EditTodoRequest = () => ({ type: "EDIT_TODO_REQUEST" })
// const A_EditTodoSuccess = (payload) => ({
//   type: "EDIT_TODO_SUCCESS",
//   payload
// })
// const A_EditTodoFailed = (payload) => ({
//   type: "EDIT_TODO_FAILED",
//   payload
// })
// const A_EditTodoClear = () => ({ type: "EDIT_TODO_CLEAR" })

// const A_RemoveTodoRequest = () => ({ type: "REMOVE_TODO_REQUEST" })
// const A_RemoveTodoSuccess = (payload) => ({
//   type: "REMOVE_TODO_SUCCESS",
//   payload
// })
// const A_RemoveTodoFailed = (payload) => ({
//   type: "REMOVE_TODO_FAILED",
//   payload
// })
// const A_RemoveTodoClear = () => ({ type: "REMOVE_TODO_CLEAR" })

// const A_FetchTodoRequest = () => ({ type: "FETCH_TODO_REQUEST" })
// const A_FetchTodoSuccess = (payload) => ({
//   type: "FETCH_TODO_SUCCESS",
//   payload
// })
// const A_FetchTodoFailed = (payload) => ({
//   type: "FETCH_TODO_FAILED",
//   payload
// })
// const A_FetchTodoClear = () => ({ type: "FETCH_TODO_CLEAR" })

// const A_FetchTodosRequest = () => ({ type: "FETCH_TODOS_REQUEST" })
// const A_FetchTodosSuccess = (payload) => ({
//   type: "FETCH_TODOS_SUCCESS",
//   payload
// })
// const A_FetchTodosFailed = (payload) => ({
//   type: "FETCH_TODOS_FAILED",
//   payload
// })
// const A_FetchTodosClear = () => ({ type: "FETCH_TODOS_CLEAR" })

// const A_CheckedTodoRequest = () => ({ type: "CHECKED_TODO_REQUEST" })
// const A_CheckedTodoSuccess = (payload) => ({
//   type: "CHECKED_TODO_SUCCESS",
//   payload
// })
// const A_CheckedTodoFailed = (payload) => ({
//   type: "CHECKED_TODO_FAILED",
//   payload
// })
// const A_CheckedTodoClear = () => ({ type: "CHECKED_TODO_CLEAR" })


// const A_ClearCompletedSuccess = () => ({
//   type: "CLEAR_COMPLETED_SUCCESS",
// })


// export {
//   A_AddTodoRequest,
//   A_AddTodoSuccess,
//   A_AddTodoFailed,
//   A_AddTodoClear,

//   A_EditTodoRequest,
//   A_EditTodoSuccess,
//   A_EditTodoFailed,
//   A_EditTodoClear,

//   A_RemoveTodoRequest,
//   A_RemoveTodoSuccess,
//   A_RemoveTodoFailed,
//   A_RemoveTodoClear,

//   A_FetchTodoRequest,
//   A_FetchTodoSuccess,
//   A_FetchTodoFailed,
//   A_FetchTodoClear,

//   A_FetchTodosRequest,
//   A_FetchTodosSuccess,
//   A_FetchTodosFailed,
//   A_FetchTodosClear,

//   A_CheckedTodoRequest,
//   A_CheckedTodoSuccess,
//   A_CheckedTodoFailed,
//   A_CheckedTodoClear,

//   A_ClearCompletedSuccess,

// }