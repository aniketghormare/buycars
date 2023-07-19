import React, { useEffect, useState } from 'react'

const Dealer = () => {

    const [Major_Scratches, setMajor_Scratches] = useState("")
    const [Number_of_accidents_reported, setNumber_of_accidents_reported] = useState("")

    const [Number_of_previous_buyers, setNumber_of_previous_buyers] = useState("")
    const [OdometerKM, setOdometerKM] = useState("")
    const [Original_Paint, setOriginal_Paint] = useState("")
    const [Registration_Place, setRegistration_Place] = useState("")
    const [model, setmodel] = useState("")

    const [inventery,setinventery]=useState([])


    const handlesubmit = (e) => {
        e.preventDefault()
        let obj = {
            Major_Scratches: +Major_Scratches,
            Number_of_accidents_reported: +Number_of_accidents_reported,
            Number_of_previous_buyers: +Number_of_previous_buyers,
            OdometerKM: +OdometerKM,
            Original_Paint,
            Registration_Place,
            model
        }

        fetch("https://encouraging-lime-dugong.cyclic.app/inventery/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            return res.json()
        }).then((data) => {
            alert("Inventery Added")
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
        setMajor_Scratches("")
        setNumber_of_accidents_reported("")
        setNumber_of_previous_buyers("")
        setOdometerKM("")
        setOriginal_Paint("")
        setRegistration_Place("")
        setmodel("")

    

  
}
const getinventery = () => {
    fetch("https://encouraging-lime-dugong.cyclic.app/inventery", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
       
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
         setinventery(data)
       
    }).catch((err) => {
        console.log(err)
    })
  
}

const handledelete=(id)=>{
    fetch(`https://encouraging-lime-dugong.cyclic.app/inventery/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
       
    }).then((res) => {
        return res.json()
    }).then((data) => {
       alert("Inventery Data Deleted")
       
    }).catch((err) => {
        console.log(err)
    })
}


useEffect(() => {
    getinventery()
}, [inventery])
console.log(inventery)


return (
    <div>

        <div>
            <form action="" onSubmit={handlesubmit}>
                <h1>Inventery Add</h1>
                <br />
                <input type="text" placeholder='Major_Scratches' name="Major_Scratches" value={Major_Scratches} onChange={(e) => setMajor_Scratches(e.target.value)} />
                <br />

                <input type="text" placeholder='Number_of_accidents_reported' name='Number_of_accidents_reported' value={Number_of_accidents_reported} onChange={(e) => setNumber_of_accidents_reported(e.target.value)} />
                <br />
                <input type="text" placeholder='Number_of_previous_buyers' name='Number_of_previous_buyers' value={Number_of_previous_buyers} onChange={(e) => setNumber_of_previous_buyers(e.target.value)} />
                <br />
                <input type="text" placeholder='OdometerKM' name='OdometerKM' value={OdometerKM} onChange={(e) => setOdometerKM(e.target.value)} />
                <br />
                <input type="text" placeholder='Original_Paint' name='Original_Paint' value={Original_Paint} onChange={(e) => setOriginal_Paint(e.target.value)} />
                <br />
                <input type="text" placeholder='Registration_Place' name='Registration_Place' value={Registration_Place} onChange={(e) => setRegistration_Place(e.target.value)} />
                {/* <input type="text"  placeholder='model'/> */}
                <br />
                <select id="" name="model" avlue={model} onChange={(e) => setmodel(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Honda WR-V">Honda WR-V</option>
                    <option value="Audi Q5">Audi Q5</option>
                    <option value="Audi A4">Audi A4</option>
                    <option value="Audi RS5">Audi RS5</option>
                    <option value="Honda City">Honda City</option>
                    <option value="Honda Amaze">Honda Amaze</option>
                    <option value="Honda City Hybrid">Honda City Hybrid</option>
                    <option value="Maruti Invicto">Maruti Invicto</option>
                    <option value="Maruti Brezza">Maruti Brezza</option>
                    <option value="Maruti Jimny">Maruti Jimny</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="Tata Harrier">Tata Harrier</option>
                    <option value="Tata Tiago">Tata Tiago</option>



                </select>
                <br />
                <input type="submit" />
            </form>
        </div>
            
        <div style={{height:"auto",width:"100%",display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"5px"}}>
            {
                inventery.map((el,index)=>{
                    return (
                        <div style={{height:"300px",width:"300px",border:"1px solid black",marginTop:"5px"}}>
                            <p>Major_Scratches - {el.Major_Scratches}</p>
                            <p>Number_of_accidents_reported - {el.Number_of_accidents_reported}</p>
                            <p>Number_of_previous_buyers - {el.Number_of_previous_buyers}</p>
                            <p>OdometerKM - {el.OdometerKM}</p>
                            <p>Original_Paint - {el.Original_Paint}</p>
                            <p>Registration_Place - {el.Registration_Place}</p>
                             <p>model - {el.model}</p>
                             <button onClick={()=>handledelete(el._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>

    </div>
)
}

export default Dealer