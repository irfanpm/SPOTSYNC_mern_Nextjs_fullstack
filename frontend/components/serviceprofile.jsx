'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useSelector,useDispatch } from 'react-redux';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { fetchService } from '@/redux/features/getService';
import { useEffect,useState } from "react";
import CardMedia from '@mui/material/CardMedia';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Serviceprofile() {
    const dispatch=useDispatch()
    const user = useSelector((state) => state.user.user.data);
    const service = useSelector((state) => state.service.service.data);
    console.log(service)

    useEffect(() => {
        dispatch(fetchService());
        
    },[]);

    const [value, setValue] = React.useState('1');


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    console.log(user)

  return (
    <div className='container'>

    
    <Card sx={{ minWidth: 275 ,height:160 }} className='d-flex justify-content-center '>
        { user?.map((item)=>(
            <>
      <Avatar alt={item.Username} src={item.avatar}  style={{width:"15vh" ,height:"15vh"}}/>
      <CardContent >
        <Typography variant="h5" component="div">
            {item.Username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </>
       ))
}
    </Card>
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  centered>
            <Tab label="Services" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" className='row '>
        {
          service?.map((item)=>( 
         
         <Card sx={{ maxWidth: 345 }} className=' col-md-3 ' >
   <CardMedia
        component="div" // Use a div as the container
        sx={{ height: 140, display: 'flex', overflowX: 'auto' }} // Add scrollable styles
      >
        {item.Image.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Image"
            style={{ flex: '0 0 auto', minWidth: '100%' }} // Ensure images don't stretch
          />
        ))}
      </CardMedia>
          
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {item.serviceName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.Category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.Description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          
          ))
        }




        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

    </div>
  );
}
