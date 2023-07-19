import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { login } from '../redux/authreducer/action'
import { useNavigate } from 'react-router-dom'
import { USER } from '../redux/authreducer/actionType'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault()
        let obj = {
            email,
            password
        }
        
        dispatch(login(obj)).then((res)=>{
             console.log(res.data)
             dispatch({type:USER,payload:res.data.name})
            alert("Login Successfull")
             navigate("/product")
        })
          setemail("")
          setpassword("")

    }


    return (
        <DIV>

            <div className='formdiv'>
                <form action="" onSubmit={handlesubmit}>
                    <h1>Login</h1>
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

export default Login


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