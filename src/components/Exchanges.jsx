import React, { useEffect, useState } from 'react';
import axios from "axios";
import { server } from '../index';
import { Container, Heading, HStack, Image, VStack, Text } from '@chakra-ui/react';
import Loader from "../components/Loader"
const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setExchanges(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchExchanges()
  }, [])


  if (error) return <>
  <VStack w={'100vw'} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
    <Heading>Oops, Something Went Wrong !</Heading>
    <Text color={'gray.600'} fontSize={"lg"}>Refresh or Try again later</Text>
  </VStack>
  </>

  return <Container maxW={'container.xl'} minH={"100vh"}>
    {loading ? (<Loader />) : (
      <>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {exchanges.map((i) => (
            <Card key={i.id} name={i.name} image={i.image} rank={i.trust_score_rank} url={i.url} />
          ))}
        </HStack>
      </>
    )}
  </Container>
}
const Card = ({ name, image, rank, url }) => (
  <a href={url} target={'blank'} >
    <VStack w={150} shadow={"lg"} bgColor={"whiteAlpha.100"} transition={"all 0.25s"} p={8} borderRadius={"lg"} m={4}
      css={{
        "&:hover": {
          transform: "scale(1.1)"
        }
      }}>
      <Image src={image} w={10} h={10} objectFit={"contain"} alt={name} />
      <Heading noOfLines={1} fontSize={'md'}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>

  </a>
)
export default Exchanges;
