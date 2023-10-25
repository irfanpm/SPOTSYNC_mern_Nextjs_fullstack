'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Addservice from './addservice';
import { fetchService } from '@/redux/features/getService';
import { useEffect,useState } from "react";

export default function UserTab() {
  const [value, setValue] = React.useState(2);
  const [mainvalue, mainsetValue] = React.useState(0);
  const[Service,setServices]=useState([])
  console.log(Service)
const dispatch=useDispatch()
  const user = useSelector((state) => state.user.user.data);
  const service = useSelector((state) => state.service.service.data);

useEffect(() => {
  // Fetch user data when the component mounts
    dispatch(fetchService());
    setServices(service)

    
    
},[Service]);
  // Add a check to make sure user is defined before accessing its properties

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangemain = (event, newValue) => {
    mainsetValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={mainvalue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangemain} aria-label="lab API tabs example" centered>
            {user && user[0]?.Type === "serviceProvider" ? (
 <TabList>              
                <Tab label="user" value={0} />

    <Tab label="service provider" value={1} />
                </TabList>            ) : (
              <Tab label="user" value={0} />
            )}
          </TabList>
        </Box>
        {user && user[0]?.Type === "serviceProvider" ?
        <>
        <TabPanel value={1}>
        <Addservice/>
        {
          Service?.map((item)=>(
            <li>{item.serviceName}</li>
          ))
        }

        
        </TabPanel>
          <TabPanel value={0}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{  borderColor: 'divider'}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab icon={<PersonIcon />} label="followers" value={2} />
                  <Tab icon={<FavoriteIcon />} label="favorite" value={3} />
                  <Tab icon={<ReviewsIcon />} label="review" value={4} />
                </TabList>
              </Box>
              <TabPanel value={2}>Item One</TabPanel>
              <TabPanel value={3}>Item Two</TabPanel>
              <TabPanel value={4}>Item Three</TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
                </>:
        <TabPanel value={0}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{  borderColor: 'divider'}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab icon={<PersonIcon />} label="followers" value={2} />
                  <Tab icon={<FavoriteIcon />} label="favorite" value={3} />
                  <Tab icon={<ReviewsIcon />} label="review" value={4} />
                </TabList>
              </Box>
              <TabPanel value={2}>Item One</TabPanel>
              <TabPanel value={3}>Item Two</TabPanel>
              <TabPanel value={4}>Item Three</TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
}
      </TabContext>
    </Box>
  );
}
