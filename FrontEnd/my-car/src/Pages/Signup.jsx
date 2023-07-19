import React, { useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from "react-redux"
import { signin } from '../redux/authreducer/action'
import { Navigate } from 'react-router-dom'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
const Signup = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        let obj = {
            email,
            password,
            name
        }
        dispatch(signin(obj)).then((res) => {
           alert("SignUp Success")
        })
        setemail("")
        setname("")
        setpassword("")

    }
    return (
        <DIV>

            <div className='formdiv'>
                <form action="" onSubmit={handlesubmit}>
                    <h1>SignUp</h1>
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setname(e.target.value)} />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="text" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    <br /><br />
                    <input type="submit" />
                </form>
            </div>

        </DIV>
    )
}

export default Signup


const DIV = styled.div`
     height: auto;
     width: 100%;
     border: 1px solid white;
     margin-top: 50px;

     .formdiv{
        height: 400px;
        width: 30%;
        border: 1px solid white;
        margin: auto;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
     }
`