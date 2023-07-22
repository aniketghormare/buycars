import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { getnewcarsdata } from '../redux/Productreducer/action'
import { SET_ASC_DATA, SET_FILTER_DATA, SET_SINGLE_PRODUCT } from '../redux/Productreducer/actionType'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductPage = () => {
    const [data, setdata] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const osproducts = useSelector((store) => {
        return store.productReducer.products
    })

    const getosdata = () => {
        dispatch(getnewcarsdata)
            .then((res) => {
                setdata(res.data)

            })

    }

    const handleclick = (e) => {
       
        const { name } = e.target
      
        if (name == "reset") {
            dispatch(getnewcarsdata)
            .then((res) => {
                setdata(res.data)

            })
          
        } else if (name == "asc") {
            dispatch(getnewcarsdata)
            .then((res) => {
                let newdata =[]
                
                newdata=res.data.sort((a, b) => {
                    return (a.price - b.price)
                })
                setdata(newdata)
                dispatch({ type: SET_FILTER_DATA, payload: newdata })
            })

          


           

        } else if (name == "desc") {
           
            dispatch(getnewcarsdata)
            .then((res) => {
                let newdata =[]
                
                newdata=res.data.sort((a, b) => {
                    return (b.price - a.price)
                })
                setdata(newdata)
                dispatch({ type: SET_FILTER_DATA, payload: newdata })
            })
        }else if (name == "ascmilage") {
           
            dispatch(getnewcarsdata)
            .then((res) => {
                let newdata =[]
                
                newdata=res.data.sort((a, b) => {
                    return (a.oem_mileage - b.oem_mileage)
                })
                setdata(newdata)
                dispatch({ type: SET_FILTER_DATA, payload: newdata })
            })
        }else if(name == "descmilage"){
            dispatch(getnewcarsdata)
            .then((res) => {
                let newdata =[]
                
                newdata=res.data.sort((a, b) => {
                    return (b.oem_mileage - a.oem_mileage)
                })
                setdata(newdata)
                dispatch({ type: SET_FILTER_DATA, payload: newdata })
            })
        }else if(name=="red"){
            let filterdata = data.filter((el, index) => "red" == el.colors)
            dispatch({ type: SET_FILTER_DATA, payload: filterdata })
        }else if(name=="black"){
            let filterdata = data.filter((el, index) => "black" == el.colors)
            dispatch({ type: SET_FILTER_DATA, payload: filterdata })
        }


        else {

            let filterdata = data.filter((el, index) => name == el.name)
            dispatch({ type: SET_FILTER_DATA, payload: filterdata })
        }


    }
    const handlebuy = (el) => {
       
        dispatch({ type: SET_SINGLE_PRODUCT, payload: el })
        navigate("/singleproduct")
    }

  


    useEffect(() => {
        getosdata()
    }, [])

    return (
        <DIV>
            <h1>Product Page</h1>


            <div className='product'>
                <div className='sidebar'>

                    <h1>Filter By Modal</h1>

                    <br />
                    <div>
                        <button name="Audi" onClick={(e) => handleclick(e)}>Audi</button>

                    </div>
                    <br />
                    <div>
                        <button name="Honda" onClick={(e) => handleclick(e)}>Honda</button>

                    </div>
                    <br />
                    <div>
                        <button name="Maruti" onClick={(e) => handleclick(e)}>Maruti</button>

                    </div>
                    <br />
                    <div>
                        <button name="Tata" onClick={(e) => handleclick(e)}>Tata</button>

                    </div>
                    <br />
                    <div>
                        <button name="reset" onClick={(e) => handleclick(e)}>Reset</button>

                    </div>

                    <h1>Price</h1>

                    <div>
                        <button name='asc' onClick={(e) => handleclick(e)}>Low To High</button>
                        <br />
                        <br />
                        <button name='desc' onClick={(e) => handleclick(e)}>High To Low</button>
                    </div>
                    <h1>Milage</h1>

                    <div>
                        <button name='ascmilage' onClick={(e) => handleclick(e)}>Low To High</button>
                        <br />
                        <br />
                        <button name='descmilage' onClick={(e) => handleclick(e)}>High To Low</button>
                    </div>

                    <h1>Color</h1>

                    <div>
                        <button name='red' onClick={(e) => handleclick(e)}>Red</button>
                        <br />
                        <br />
                        <button name='black' onClick={(e) => handleclick(e)}>Black</button>
                    </div>
                </div>

                <div className='productsdata' style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "5px", padding: "5px" }}>

                    {
                        osproducts.length > 0 && osproducts.map((el, index) => {
                            return (
                                <div className='card' >
                                    <img width={"80%"} src={el.image} alt="" />

                                    <h3>{el.modelname}</h3>
                                    <h4>{el.price} Lakh</h4>
                                    <h4>{el.oem_mileage} KPH</h4>
                                    <button style={{ marginBottom: "5px" }} onClick={() => handlebuy(el)}>More...</button>
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


const DIV = styled.div`
    height: auto;
    width: 100%;
    border: 1px solid white;
    .product{
        height: auto;
        width: 100%;
        border: 1px solid white;
        display: flex;
    }
    .sidebar{
        height: 100%;
        width:20%;
        border: 1px solid white;
    }
    .productsdata{
        height: 100%;
        width:80%;
        border: 1px solid white;
    }
    .card{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`