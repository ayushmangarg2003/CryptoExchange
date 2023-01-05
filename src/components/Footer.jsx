import { Box, HStack, Button, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter ,FaLinkedin ,FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box w={'100vw'} p={8} backgroundColor={"blackAlpha.900"}>
      <Stack direction={['column','column','row']} justifyContent={["center" , "center","space-evenly"]} gap={8} alignItems={"center"}>
        <HStack w={['100%' , "100%" , "32%"]} justifyContent={['space-evenly' , 'space-evenly' , 'center']} gap={[0 , 0 , 8]}>
          <Button variant={'unstyled'} color={'white'}>
            <Link to={'/'} >Home</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
            <Link to={'/exchanges'} >Exchanges</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
            <Link to={'/coins'} >Coins</Link>
          </Button>
        </HStack>

        <Text w={['100%' , "100%" , "32%"]} textAlign={"center"} color={'white'}>© Copyright All Rights Reserved</Text>

        <HStack w={['100%' , "100%" , "32%"]} justifyContent={"center"} gap={8}>
          <a href="https://twitter.com/AyushmanGarg4" target={'blank'}>
            <FaTwitter fontSize={20} color='white'></FaTwitter>
          </a>
          <a href="https://www.linkedin.com/in/ayushmangarg/" target={'blank'}>
            <FaLinkedin fontSize={20} color='white'></FaLinkedin>
          </a>
          <a href="https://github.com/ayushmangarg2003" target={'blank'}>
            <FaGithub fontSize={20} color='white'></FaGithub>
          </a>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer
