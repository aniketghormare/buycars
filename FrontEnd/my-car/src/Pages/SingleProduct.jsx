import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { inventeryget } from '../redux/Productreducer/action';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function SingleProduct() {
    const [product, setproduct] = useState({})
    let [newdata, setnewdata] = useState([])
    const [inventerydata, setinventerydata] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const single = useSelector((store) => {
        return store.productReducer.SingleProduct
    })
    const inventery = useSelector((store) => {
        return store.productReducer.Inventery
    })
    const getinventery = () => {
        dispatch(inventeryget).then((res) => {
            // setnewdata(res.data)
            res.data.map((el, index) => {
                if (el.model == single.modelname) {
                    setinventerydata(el)

                }
            })

            // newdata.map((el, index) => {
            //     if (el.model == single.modelname) {
            //         setinventerydata(el)

            //     }
            // })


        })
    }




    const handlebuycar = () => {
        alert("Your Car Booked")
        navigate("/")
    }





    useEffect(() => {
        getinventery()
    }, [])
    useEffect(() => {
        setproduct(single)
    }, [])

    console.log(product)
    console.log(inventery)
    console.log(inventerydata)
    return (
        <Container maxW={'7xl'} >
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }} display={"grid"}>
                <Flex style={{ margin: "auto" }}>
                    {/* <Image
                        rounded={'md'}
                        alt={'product image'}
                        width="80%"
                        src={
                            product.image
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    /> */}
                    <img width={"100%"} height={"300px"} src={product.image} alt="" style={{ marginTop: "10px" }} />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    {/*  */}



                    {/*  */}
                    <Box as={'header'} style={{border:"1px solid black",textAlign:"center"}}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }} color={"red"}>
                            Car Model - {product.modelname},


                        </Heading>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}

                            fontSize={'2xl'} fontWeight={'bold'}>

                            Original-Price - {product.price} LPA

                        </Text>
                        <Text
                            color={useColorModeValue('gray.900', 'gray.400')}

                            fontSize={'2xl'} fontWeight={'bold'}>
                                 
                                 Selling-Price - <Text as={"mark"}>{Math.floor(product.price * 70 / 100)} LPA</Text>

                                 
                           
                        </Text>

                    </Box>
                 


                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }}>


                        </VStack>
                        <Box style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
                            <Box style={{border:"1px solid black",textAlign:"justify",padding:"10px"}}>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    // color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'} textAlign={"center"} color={"red"}>
                                    New Car Features
                                </Text>
                                <hr />

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List spacing={2}>
                                        <ListItem fontWeight={'bold'}>Model Name - {product.modelname}</ListItem>
                                        <ListItem fontWeight={'bold'}>Product Color - {product.colors}</ListItem>{' '}
                                        <ListItem fontWeight={'bold'}>Product Maximum Speed  - {product.Max_Speed} KPH</ListItem>
                                    </List>
                                    <List spacing={2}>
                                        <ListItem fontWeight={'bold'}>Product Power  - {product.Power} Bhp</ListItem>
                                        <ListItem fontWeight={'bold'}>Product Milage  - {product.oem_mileage} kmpl</ListItem>
                                        <ListItem fontWeight={'bold'}>Product Price  - {product.price} Lakh</ListItem>
                                    </List>
                                </SimpleGrid>
                            </Box>
                            <Box style={{border:"1px solid black",textAlign:"justify",padding:"10px"}}>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    // color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    color={"red"}
                                    mb={'4'} textAlign={"center"}>
                                    INVENTERY CAR DETAILS
                                </Text>
                                <hr />
                                {
                                    inventerydata.model ? <List spacing={2}>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Car Scratches:
                                            </Text>{' '}
                                            {inventerydata.Major_Scratches}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                No of Accidents Reported:
                                            </Text>{' '}
                                            {inventerydata.Number_of_accidents_reported}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                No of Previoue Buyers:
                                            </Text>{' '}
                                            {inventerydata.Number_of_previous_buyers}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Odo Meter Rating:
                                            </Text>{' '}
                                            {inventerydata.OdometerKM} KM
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Original color:
                                            </Text>{' '}
                                            {inventerydata.Original_Paint}
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Registration Place:
                                            </Text>{' '}
                                           
                                                {inventerydata.Registration_Place}
                                          

                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'}>
                                                Model:
                                            </Text>{' '}
                                            {inventerydata.model}
                                        </ListItem>
                                    </List> : "NO DATA"
                                }


                            </Box>
                        </Box>

                    </Stack>

                    <Button
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={"teal"}
                        onClick={handlebuycar}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Buy Car
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}






