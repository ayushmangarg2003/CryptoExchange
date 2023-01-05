import React, { useEffect, useState } from 'react';
import axios from "axios";
import { server } from '../index';
import { Container, Heading, HStack, Image, VStack, Text, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from "../components/Loader"
import { Link } from 'react-router-dom';
const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol = currency==="inr"?"₹":currency==='eur'?"€":"$";

  const changePage = (page) => {
    setPage(page)
    setLoading(true)
  }

  const btns = new Array(129).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
    fetchCoins()
  }, [currency , page])


  if (error) return <>
  <VStack w={'100vw'} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
    <Heading>Oops, Something Went Wrong !</Heading>
    <Text color={'gray.600'} fontSize={"lg"}>Refresh or Try again later</Text>
  </VStack>
  </>

  return <Container maxW={'container.xl'} minH={"100vh"}>
    {loading ? (<Loader />) : (
      <>

      <RadioGroup value={currency} onChange={setCurrency} p={6} >
        <HStack spacing={4}>
          <Radio value={'inr'}>INR</Radio>
          <Radio value={'eur'}>Eur</Radio>
          <Radio value={'usd'}>USD</Radio>
        </HStack>
      </RadioGroup>
      
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {coins.map((i) => (
            <Card id={i.id} key={i.id} price={i.current_price} symbol={i.symbol} name={i.name} image={i.image} currencySymbol={currencySymbol}/>
          ))}
        </HStack>
        <HStack w={'full'} overflowX={'auto'} p={'8'}>
          {
            btns.map((i , index)=>(
              <Button 
              bgColor={'blackAlpha.900'}
              color={'white'} 
              onClick={() => changePage(index+1)}
              >
                {index+1}
              </Button>
            ))
          }
        </HStack>
      </>
    )}
  </Container>
}
const Card = ({ name, image, price,symbol , id ,currencySymbol }) => (
  <Link to={`/coins/${id}`}>
    <VStack w={160} shadow={"xl"} bgColor={"whiteAlpha.50"} transition={"all 0.25s"} p={8} borderRadius={"lg"} m={4}
      css={{
        "&:hover": {
          transform: "scale(1.1)"
        }}}>
      <Image src={image} w={10} h={10} objectFit={"contain"} alt={name} />
      <Heading noOfLines={1} fontSize={'md'}>{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
    </VStack>
  </Link>
)
export default Coins;
