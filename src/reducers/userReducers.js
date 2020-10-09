import { LOGIN_USER, USERS_ERROR, ERROR } from "../types/userTypes"
import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from "../types/states"

const users = {
  status: IDLE_STATUS,
  user: {},
  error: null,
}

export const userReducer = (state = users, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        data: {},
        status: SUCCESS_STATUS,
      }
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        status: FAILURE_STATUS,
      }
    default:
      return state
  }
}
