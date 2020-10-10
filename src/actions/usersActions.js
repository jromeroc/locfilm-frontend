import axios from "axios"
import { LOGIN_USER, REMOVE_ERROR_USER, USERS_ERROR } from "../types/userTypes"

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    axios({
      url: "http://45.56.74.146:8000/users/login",
      method: "post",
      headers: { "content-type": "application/json" },
      data: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        localStorage.setItem("id", `${data.id}`)
        localStorage.setItem("token", `${data.token}`)
        dispatch(login(data))
      })
      .catch((err) => {
        dispatch(setError(err.response))
      })
  }
}

export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  }
}
export const setError = (err) => {
  return {
    type: USERS_ERROR,
    payload: err,
  }
}
export const removeErrorUser = () => {
  return {
    type: REMOVE_ERROR_USER,
  }
}
