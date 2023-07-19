
import axios from "axios"
import { ISERROR, ISLOADING, LOGIN_SUCC, PRODUCT_GET_INVENTERY, PRODUCT_GET_SUCC, SIGNUP_SUCC } from "./actionType";
// export const signin = (user) => (dispatch) => {
//   dispatch({ type: ISLOADING })
//   return axios.post("http://localhost:4500/users/signup", user)
// };

export const getnewcarsdata = (dispatch) => {
  dispatch({ type: ISLOADING })
  return axios.get("https://encouraging-lime-dugong.cyclic.app/oemadd").then((res)=>{
   
     dispatch({type:PRODUCT_GET_SUCC,payload:res.data})
     return res
   }).catch((err)=>{
    dispatch({type:ISERROR})
   })
};

export const inventeryget = (dispatch) => {
  dispatch({ type: ISLOADING })
  return axios.get("https://encouraging-lime-dugong.cyclic.app/inventery",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
   }).then((res)=>{
   
     dispatch({type:PRODUCT_GET_INVENTERY,payload:res.data})
    return res
   }).catch((err)=>{
    dispatch({type:ISERROR})
   })
  
};


// export const login = (user) => (dispatch) => {
//   dispatch({ type: ISLOADING })
//   return axios.post("http://localhost:4500/users/login", user).then((res)=>{
    
//     dispatch({ type: LOGIN_SUCC,payload:res.data.token })
//   }).catch((err)=>{
//     dispatch({ type: ISERROR })
//   })
// };