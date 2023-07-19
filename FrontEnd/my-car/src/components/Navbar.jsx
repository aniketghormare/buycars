import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {styled} from "styled-components"
import { LOGOUT, USER } from '../redux/authreducer/actionType'
const Navbar = () => {
     const dispatch=useDispatch()
     const navigate=useNavigate()
     const token=useSelector((store)=>{
        return store.authReducer.isAuth
     })

     const logout=()=>{
        dispatch({type:LOGOUT})
     }

     const handleloginasdealer=()=>{
        if(token){
            navigate("/dealer")
        }else{
            alert("Login First")
        }
     }


    return (
        <DIV className='div'>
            <Link className='link' to={"/"}>Home</Link>
            <Link className='link' to={"/signup"}>SignUp</Link>
            <Link className='link' to={"/login"}>Login as Buyer</Link>
            <Link className='link' to={"/product"}>Product</Link>
           
             <button onClick={handleloginasdealer}>Dealer Page</button>
            <button onClick={logout}>Logout</button>
        </DIV>
    )
}

export default Navbar


const DIV=styled.div`
    height: 100px;
    width: 100%;
    border: 1px solid teal;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: teal;
    color: white;
    text-decoration: none;


    .link {
        color: white;
        text-decoration: none;
    }
    
`