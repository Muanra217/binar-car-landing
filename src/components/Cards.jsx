import React, {useEffect, useState} from 'react'
import CardItem from './CardItem'
import './styles/Cards.css'
import axios from 'axios'
import {Grid, Typography} from '@mui/material'

const Cards = () => {
  const [cars, setCars] = useState([])

  const getCars = async () => {
    const res = await axios.get(
      'https://rent-cars-api.herokuapp.com/customer/car'
    )
    setCars(res.data)
  }

  useEffect(() => {
    getCars()
  }, [])
  return (
    <div className='cards'>
        <Grid container maxWidth='lg' mt={1} px={1} mx='auto'>
        {cars ? (
          cars.map((car) => {
            return (
              <CardItem
                item={car}
              />
            )
          })
        ) : (<h1>Empty</h1>)}
        </Grid>
        {/* <div className="cards_container">
        {cars ? (
          cars.map((car) => {
            return (
              <CardItem
                item={car}
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
              />
            )
          })
        ) : (<h1>Empty</h1>)}
        </div> */}
      </div>
  )
}

export default Cards