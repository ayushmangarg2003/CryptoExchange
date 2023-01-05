import React from 'react'
import {Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Spinner size='xl' thickness='5px'
    speed='0.5s'
    emptyColor='gray.300'
    color='blue.500'
    pos={'absolute'}
    top={'50%'}
    left={"50%"}
    transform={'translate(-50% , -50%)'}/>
  )
}

export default Loader
