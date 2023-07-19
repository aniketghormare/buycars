import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Children}) => {
  const auth=useSelector((store)=>{
    return store.authReducer.token
  })
  return (
    <div>
      {
        auth? Children : <Navigate to={"/login"}/>
      }
    </div>
  )
}

export default PrivateRoutes