import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'

import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Link, useDisclosure, Box, Input } from '@chakra-ui/react'
import { styled } from 'styled-components'
const Dealer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Major_Scratches, setMajor_Scratches] = useState("")
    const [Number_of_accidents_reported, setNumber_of_accidents_reported] = useState("")

    const [Number_of_previous_buyers, setNumber_of_previous_buyers] = useState("")
    const [OdometerKM, setOdometerKM] = useState("")
    const [Original_Paint, setOriginal_Paint] = useState("")
    const [Registration_Place, setRegistration_Place] = useState("")
    const [model, setmodel] = useState("")


    const [Major_Scratches1, setMajor_Scratches1] = useState("")
    const [Number_of_accidents_reported1, setNumber_of_accidents_reported1] = useState("")

    const [Number_of_previous_buyers1, setNumber_of_previous_buyers1] = useState("")
    const [OdometerKM1, setOdometerKM1] = useState("")
    const [Original_Paint1, setOriginal_Paint1] = useState("")
    const [Registration_Place1, setRegistration_Place1] = useState("")
    const [model1, setmodel1] = useState("")
    const [show, setshow] = useState(false)

    const [editdata, seteditdata] = useState({})

    const [inventery, setinventery] = useState([])


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

    const handledelete = (id) => {
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
            setshow()
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleeditdata = (el) => {
        setTimeout(() => {
            setshow(!show)
        }, 1000);
        seteditdata(el)

    }

    const handlesubmitedit = () => {
        const obj={
            
        }
        if(Major_Scratches1){
            obj.Major_Scratches= +Major_Scratches1
        }
        if(Number_of_accidents_reported1){
            obj.Number_of_accidents_reported=+Number_of_accidents_reported1
        }
        if(Number_of_previous_buyers1){
            obj.Number_of_previous_buyers=+Number_of_previous_buyers1
        }
        if(OdometerKM1){
            obj.OdometerKM=+OdometerKM1
        }
        if(Original_Paint1){
            obj.Original_Paint=Original_Paint1
        }
        if(Registration_Place1){
            obj.Registration_Place=Registration_Place1
        }
        if(model1){
            obj.model=model1
        }


        fetch(`https://encouraging-lime-dugong.cyclic.app/inventery/update/${editdata._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body:JSON.stringify(obj)

        }).then((res) => {
            return res.json()
        }).then((data) => {
            alert("Inventery Data Updated")
              
        }).catch((err) => {
            console.log(err)
        })

        setshow()

    }


    useEffect(() => {
        getinventery()
    }, [inventery])
    console.log(inventery)


    return (
        <DIV>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
                {
                    show &&
                    <form action="" onSubmit={handlesubmitedit}>
                        <h1>Edit Form</h1>
                        <input type="text" value={editdata._id}/>
                        <br />
                        <input type="text" placeholder='Major_Scratches1' name="Major_Scratches1" value={Major_Scratches1} onChange={(e) => setMajor_Scratches1(e.target.value)} />
                        <br />

                        <input type="text" placeholder='Number_of_accidents_reported1' name='Number_of_accidents_reported1' value={Number_of_accidents_reported1} onChange={(e) => setNumber_of_accidents_reported1(e.target.value)} />
                        <br />
                        <input type="text" placeholder='Number_of_previous_buyers1' name='Number_of_previous_buyers' value={Number_of_previous_buyers1} onChange={(e) => setNumber_of_previous_buyers1(e.target.value)} />
                        <br />
                        <input type="text" placeholder='OdometerKM1' name='OdometerKM1' value={OdometerKM1} onChange={(e) => setOdometerKM1(e.target.value)} />
                        <br />
                        <input type="text" placeholder='Original_Paint1' name='Original_Paint1' value={Original_Paint1} onChange={(e) => setOriginal_Paint1(e.target.value)} />
                        <br />
                        <input type="text" placeholder='Registration_Place1' name='Registration_Place1' value={Registration_Place1} onChange={(e) => setRegistration_Place1(e.target.value)} />

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
                }

            </div>

            <div style={{ height: "auto", width: "100%", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "5px" }}>
                {
                    inventery.map((el, index) => {
                        return (
                            <>





                                <div style={{ height: "auto", width: "300px", border: "1px solid black", marginTop: "5px" }}>
                                    <p>Major_Scratches - {el.Major_Scratches}</p>
                                    <p>Number_of_accidents_reported - {el.Number_of_accidents_reported}</p>
                                    <p>Number_of_previous_buyers - {el.Number_of_previous_buyers}</p>
                                    <p>OdometerKM - {el.OdometerKM}</p>
                                    <p>Original_Paint - {el.Original_Paint}</p>
                                    <p>Registration_Place - {el.Registration_Place}</p>
                                    <p>model - {el.model}</p>
                                    <button onClick={() => handledelete(el._id)}>Delete</button>
                                    <button onClick={() => handleeditdata(el)}>




                                        Edit</button>

                                </div>

                            </>
                        )
                    })
                }
            </div>

        </DIV>
    )
}

export default Dealer

const DIV=styled.div`
    input{
height: 30px;
    }
    button{
        height: 30px;
    }
`




{/* <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}  >
                               
<ModalOverlay />
<ModalContent>
    <ModalHeader >Edit Page</ModalHeader>
    <ModalCloseButton />
    <Box>
        <Input  type="text" placeholder="id"  name='id' />

        <Input type="text" name='city' />
        <Input type="text" name='country' />
        <Input type="text"  name='duration' />
        <Input type="text"  name='price' />
        

        <Input type="text" name='image' />
        <Box>
            <Button   >Edit</Button>
        </Box>

    </Box>
    <ModalBody pb={6}>

    </ModalBody>

    <ModalFooter>

    </ModalFooter>
</ModalContent>

</Modal> */}