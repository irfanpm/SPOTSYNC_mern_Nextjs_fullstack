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
import { showfavourite } from '@/redux/features/showfavourite';
import { Skeleton } from '@mui/material';

function Showservice({category}) {
  const router=useRouter()

  const dispatch=useDispatch()
    const service=useSelector((state)=>state.showservice.service.data)
  
    useEffect(()=>{
      dispatch(showservice(category))



    },[])
    const handleshowservice=(id)=>{
      dispatch(Servicedetails(id))
      dispatch(getReview(id))
    
     dispatch(showfavourite())



     dispatch(Avgreview(id))



      router.push(`/user/servicedetails/${id}`)

    }
    console.log(service)
  return (
    <div className='row conatiner  m-4'>
      {  (service?.map((data)=>( (data)?
       <Card  className='  d-flex  col-md-7 mt-4 h-50' onClick={()=>{handleshowservice(data._id)}} >
      <CardMedia
       sx={{
        height: 160,
        width: "100%", // Set width to 100% for responsiveness
        objectFit: "cover",
        '@media (min-width: 600px)': {
          width: "180px", // Set a specific width for larger screens
        }}}
        
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
    </Card>: <Skeleton variant="rectangular" width={210} height={60} />
            )))


      }
      
    </div>
  )
}

export default Showservice
