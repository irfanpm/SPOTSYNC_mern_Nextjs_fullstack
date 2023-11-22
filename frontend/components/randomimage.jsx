'use client'
import { searchservice } from '@/redux/features/searchredux';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function RandomImage() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const dispatch=useDispatch()
  const search = useSelector((state) => state.search.search.data);
  console.log(search)
  const router=useRouter()


  const imageUrls = [
    // 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D55',
    // 'https://images.pexels.com/photos/3823440/pexels-photo-3823440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1-shvets-5710791.jpg',
    // // Add more image URLs as needed
    "https://source.unsplash.com/800x300/?service"
  ];

  
  const boxStyle = {
    backgroundImage: `url(${imageUrls[0]})`,
    backgroundSize: '100% 100%',
    height: "400px",
    width:"100%",
    opacity: "0.9"

    
  };
  const handleSearch=(e)=>{
    e.preventDefault()
    const searchValue=e.target.searchvalue.value
    const location = selectedLocation ? selectedLocation.label : ''; 
    const latitude = selectedLocation ? selectedLocation.latin : null; 
    const longitude = selectedLocation ? selectedLocation.long : null;
    console.log(searchValue, location, latitude, longitude);
    dispatch(searchservice({value:searchValue,long:longitude,lat:latitude}))
    router.push('/user/searchresult')




  }

  return (
    <div className='container '>
      <Box style={boxStyle} className="  mt-5  d-flex align-items-center justify-content-center" >

        <Box className="d-flex"  component="form"  style={{border:"2px solid #5c99fa", background:"white"} } onSubmit={handleSearch}>
          
        <TextField id="outlined-basic" label="Serach service" variant="outlined" name='searchvalue'  style={{background:"white",width:"400px" }} />
       
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      onChange={(event, newValue) => setSelectedLocation(newValue)}

      renderInput={(params) => <TextField {...params} label="Location" id='category'  name='place' style={{background:"white",width:"300px" }}  />}

    />
    <Button type='submit' style={{width:"120px",background:"#0763f5", color:"white"}}>Find</Button>
        </Box>

      
      </Box>
    </div>
  );
}

export default RandomImage;
const top100Films = [
  { label: 'Kondotty',
  latin:11.1434,
  long:75.962173


},
{
  label:'kakkenchery',
  latin:11.1638,
  long:75.8993
}


  
]