'use client'
import {showservice} from '@/redux/features/showservice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Showservice() {
  const dispatch=useDispatch()
    const service=useSelector((state)=>state.showservice.service.data)
    useEffect(()=>{
      dispatch(showservice())

    },[])
    console.log(service)
  return (
    <div className='d-flex m-5'>
      {(service?.map((data)=>(
       <Card sx={{ maxWidth: 345 }} className='m-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={data.Image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.Address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            )))

      }
      
    </div>
  )
}

export default Showservice
