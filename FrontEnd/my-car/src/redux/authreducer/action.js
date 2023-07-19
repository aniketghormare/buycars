
import axios from "axios"
import { ISERROR, ISLOADING, LOGIN_SUCC, SIGNUP_SUCC } from "./actionType";
export const signin = (user) => (dispatch) => {
  dispatch({ type: ISLOADING })
  return axios.post("https://encouraging-lime-dugong.cyclic.app/users/signup", user)
};


export const login = (user) => (dispatch) => {
  dispatch({ type: ISLOADING })
  return axios.post("https://encouraging-lime-dugong.cyclic.app/users/login", user).then((res)=>{
    
    localStorage.setItem("token",JSON.stringify(res.data.token))
    dispatch({ type: LOGIN_SUCC,payload:res.data.token })
    return res
  }).catch((err)=>{
    dispatch({ type: ISERROR })
  })
};