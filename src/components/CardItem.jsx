import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box } from '@mui/material';
import {
  FiSettings, 
  FiCalendar } from 'react-icons/fi';
import Button from './Button';


const CardItem = ({item}) => {
  return (
    <>
    <Card sx={{ maxWidth: 350 , marginTop: 5, marginRight: 5, paddingTop: 2, paddingBottom: 2, paddingLeft: '3px', paddingRight: '3px'}}>
      <CardMedia
        component="img"
        alt="car"
        maxHeight="300"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography  variant="titleBold" component="div">
          <Box sx={{ fontWeight: 'bold', marginBlock: 1 }}>Rp. {item.price.toLocaleString('id-ID')} / Hari</Box>
        </Typography>
        <Typography variant="body" color="text.secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptas, perferendis, nesciunt, itaque atque pariatur eum molestiae aliquam nisi magni doloribus earum velit consequuntur animi perspiciatis ea quod. Dignissimos, aut.
        </Typography>
        <Typography variant='bodyLight'>
          <Box display='flex' gap={1} mt={2}>
            <FiSettings /> <Box sx={{ fontWeight: 'bold' }}>Category:</Box>{item.category}
          </Box>
          <Box display='flex' gap={1} mt={2}>
            <FiCalendar /> <Box sx={{ fontWeight: 'bold' }}>Created At:</Box>{item.createdAt}
          </Box>
          <Box display='flex' gap={1} mt={2}>
          <FiCalendar /> <Box sx={{ fontWeight: 'bold' }}>Updated At:</Box>{item.updatedAt}
          </Box>
        </Typography>

      </CardContent>
      <CardActions>
        <Button>Pilih Mobil</Button>
      </CardActions>
    </Card>
    </>
  )
}

export default CardItem