import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { getnewcarsdata } from '../redux/Productreducer/action'
import { SET_FILTER_DATA, SET_SINGLE_PRODUCT } from '../redux/Productreducer/actionType'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const [data,setdata]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const osproducts=useSelector((store)=>{
        return store.productReducer.products
    })

    const getosdata=()=>{
         dispatch(getnewcarsdata).then((res)=>{
            setdata(res.data)
            
         })
    }

    const handleclick=(e)=>{
        e.preventDefault()
        const {name}=e.target
        // console.log(name)
        if(name=="reset"){
            getosdata()
        }else{
            let filterdata= data.filter((el,index)=>name==el.name)
            dispatch({type:SET_FILTER_DATA,payload:filterdata})
        }
       
       
    }
    const handlebuy=(el)=>{
         // console.log(el)
         dispatch({type:SET_SINGLE_PRODUCT,payload:el})
       navigate("/singleproduct")
    }

    
    useEffect(()=>{
        getosdata()
    },[])
    //console.log(osproducts)
  return (
    <DIV>
        <h1>Product Page</h1>


        <div className='product'>
            <div className='sidebar'>

                <h1>Filter</h1>

                 <br />
                <div>
                    <button name="Audi" onClick={(e)=>handleclick(e)}>Audi</button>
                    
                </div>
                <br />
                <div>
                    <button name="Honda" onClick={(e)=>handleclick(e)}>Honda</button>
                    
                </div>
                <br />
                <div>
                    <button name="Maruti" onClick={(e)=>handleclick(e)}>Maruti</button>
                    
                </div>
                <br />
                <div>
                    <button name="Tata" onClick={(e)=>handleclick(e)}>Tata</button>
                    
                </div>
                <br />
                <div>
                    <button name="reset" onClick={(e)=>handleclick(e)}>Reset</button>
                    
                </div>
            </div>
            
            <div className='productsdata' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"5px",padding:"5px"}}>

               {
                osproducts.length>0 && osproducts.map((el,index)=>{
                    return (
                        <div className='card' >
                            <img width={"80%"} src={el.image} alt="" />
                            
                            <h3>{el.modelname}</h3>
                            <p>{el.color}</p>
                            <button style={{marginBottom:"5px"}} onClick={()=>handlebuy(el)}>More...</button>
                        </div>
                    )
                })
               }


            </div>
        </div>
    </DIV>
  )
}

export default ProductPage


const DIV=styled.div`
    height: auto;
    width: 100%;
    border: 1px solid red;
    .product{
        height: auto;
        width: 100%;
        border: 1px solid green;
        display: flex;
    }
    .sidebar{
        height: 100%;
        width:20%;
        border: 1px solid pink;
    }
    .productsdata{
        height: 100%;
        width:80%;
        border: 1px solid blue;
    }
    .card{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`