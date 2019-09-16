import { actions } from '../actions/rootActions'
import { Api } from '../apiCalls'
import { API_URLS } from '../constants/constants' // TODO rename to index

const api = Api.getInstance()

export const addNewTodo = (payload, callback) => {
  console.log('payload =>', payload)

  return dispatch => {
    dispatch(actions.ADD_TODO.REQUEST())
    api.post(API_URLS.TODO, payload)
      .then(res => {
        console.log(res)
        dispatch(actions.ADD_TODO.SUCCESS(res))
      })
      .catch(err => {
        console.log(err)
        dispatch(actions.ADD_TODO.FAILED(err))
      })
      .finally(() => {
        callback && typeof callback === 'function' && callback()
      })

  }
}