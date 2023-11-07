'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Servicedetails } from '@/redux/features/showservicedetails';
import {showservice} from '@/redux/features/showservice'

import { useRouter } from 'next/navigation';
import { getReview } from '@/redux/features/reviewdisplay';
import { Avgreview } from '@/redux/features/averagerating';

function Showservice() {
  const router=useRouter()

  const dispatch=useDispatch()
    const service=useSelector((state)=>state.showservice.service.data)
  
    useEffect(()=>{
      dispatch(showservice())



    },[])
    const handleshowservice=(id)=>{
      dispatch(Servicedetails(id))
      dispatch(getReview(id))

     dispatch(Avgreview(id))



      router.push('/user/servicedetails')

    }
    console.log(service)
  return (
    <div className='row conatiner m-4'>
      {(service?.map((data)=>(
       <Card  className=' col-md-6 m-2  col-lg-3' onClick={()=>{handleshowservice(data._id)}} style={{width:"305px"}}>
      <CardMedia
        sx={{ height: 200 ,width:"100%"}}
        image={data.Image[0]}
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
